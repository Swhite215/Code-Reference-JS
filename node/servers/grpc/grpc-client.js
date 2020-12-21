// Dependencies
var grpc = require('grpc');
var protoLoader = require('@grpc/proto-loader');

const getGRPCClient = async () => {
    try {
        // Prepare to Work With BC Proto Service
        let PROTO_PATH = __dirname + '/protos/bcprotoservice.proto';
        var packageDefinition = protoLoader.loadSync(
            PROTO_PATH,
            {keepCase: true,
            longs: String,
            enums: String,
            defaults: true,
            oneofs: true
            });

        var bc_proto = grpc.loadPackageDefinition(packageDefinition).bcProtoService;

        var client = new bc_proto.RetrieveUnsignedProposal('localhost:50051', grpc.credentials.createInsecure());
        return client;
    }catch(e) {
        console.log(`Error retrieving GRPC Client: ${e}`)
    }
}

module.exports = {getGRPCClient}