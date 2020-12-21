// Dependencies
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');
const bcServices = require("./services/blockchain-services");

// Prepare to Work With BC Proto Service
var PROTO_PATH = __dirname + '/protos/bcprotoservice.proto';
var packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {keepCase: true,
     longs: String,
     enums: String,
     defaults: true,
     oneofs: true
    });
var bc_proto = grpc.loadPackageDefinition(packageDefinition).bcProtoService;

/**
 * Implements the RetrieveUnsignedProposal RPC method.
 */
async function retrieveUnsignedProposal(call, callback) {
  let proposalParams = call.request;

  // Convert Args Object to Args Array
  let argsArray = [];
  for (let value of Object.values(proposalParams.transactionProposal.args)) {
    argsArray.push(value)
  }

  proposalParams.transactionProposal.args = argsArray;

  let unsignedProposal = await bcServices.generateUnsignedProposal(proposalParams);
  console.log("UNSIGNED PROPOSAL ON SERVER SIDE")
  console.log(unsignedProposal);

  callback(null, unsignedProposal);
}

/**
 * Starts an RPC server that receives requests for the Greeter service at the
 * sample server port
 */
function main() {
  var server = new grpc.Server();
  server.addService(bc_proto.RetrieveUnsignedProposal.service, {retrieveUnsignedProposal: retrieveUnsignedProposal});
  server.bind('0.0.0.0:50051', grpc.ServerCredentials.createInsecure());
  server.start();
}

main();
