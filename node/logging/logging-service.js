const { createLogger, transports, format } = require("winston");
const { combine, timestamp, printf } = format;
require("winston-daily-rotate-file");

const myFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} - ${level}: ${message}`;
});

const logger = createLogger({
  level: "info",
  format: combine(timestamp(), myFormat),
  defaultMeta: { service: "user-service" },
  transports: [
    new transports.DailyRotateFile({
      filename: "application-%DATE%.log",
      datePattern: "YYYY-MM-DD",
      zippedArchive: false,
      maxFiles: "14d",
      timestamp: true,
      utc: true,
    }),
  ],
});

// Log the initial request to an endpoint
const logEndpointHit = (httpMethod, endpoint, requestParams, requestBody) => {
  try {
    let message = `HITTING ENDPOINT: ${httpMethod} to "${endpoint}" with req.params ${JSON.stringify(
      requestParams
    )} and req.body: ${JSON.stringify(requestBody)}`;
    logger.info(message);
  } catch (e) {
    // Catch Error and Continue Executions
  }
};

// Log the result of an endpoint
const logEndpointResult = (httpMethod, endpoint, requestParams, requestBody, responseCode, responseBody) => {
  try {
    let message = `EXITING ENDPOINT: ${httpMethod} to "${endpoint}" with req.params ${JSON.stringify(
      requestParams
    )} and req.body: ${JSON.stringify(requestBody)} resulted in ${responseCode} with responseBody: ${JSON.stringify(
      responseBody
    )}`;
    logger.info(message);
  } catch (e) {
    // Catch Error and Continue Executions
  }
};

// Log the result of an external service request
const logESResponseBody = (serviceAndMethod, serviceEndpoint, responseCode, responseBody) => {
  try {
    let message = `EXITING EXTERNAL SERVICE: ${serviceAndMethod} to "${serviceEndpoint}" - [${responseCode}] - ${JSON.stringify(
      responseBody
    )}`;
    logger.info(message);
  } catch (e) {
    // Catch Error and Continue Executions
  }
};

// Log an error encountered during an endpoint request
const logErrorMessage = (httpMethod, endpoint, responseCode, responseText) => {
  try {
    let message = `${httpMethod} to "${endpoint}" - [${responseCode}] - ${responseText}`;
    logger.error(message);
  } catch (e) {
    // Catch Error and Continue Execution
  }
};

module.exports = {
  logErrorMessage,
  logEndpointHit,
  logEndpointResult,
  logESResponseBody,
};
