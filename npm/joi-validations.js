const Joi = require("joi");

const objectOne = Joi.object().required();
const objectTwo = Joi.object();
const objectThree = Joi.object();

const objectSchema = Joi.object().keys({
    firstName: Joi.string().min(392).max(392).required(),
    age: Joi.number().required(),
  });

const arraySchema = Joi.object().keys({
  credentials: Joi.array().items(objectOne, objectTwo, objectThree),
});

const uuidSchema = Joi.string()
  .guid({
    version: ["uuidv4", "uuidv5"],
  })
  .required();
