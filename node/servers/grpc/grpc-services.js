const { getGRPCClient } = require("./grpc-client");


const getUnsignedProposal = async (getProposalMessage, cb) => {
    let client = await getGRPCClient();

    try {

        var promise = new Promise(function(resolve, reject) {
            client.retrieveUnsignedProposal(getProposalMessage, async function(err, response) {
                if (err) throw reject(err)
    
                console.log("UNSIGNED PROPOSAL ON CLIENT SIDE")
                console.log(response)
    
                resolve(response)
            });
        });

        let response = await promise;
        return response

    } catch(e) {
        console.log(`Error retrieivng unsigned proposal: ${e}`);
    }
}

module.exports = {
    getUnsignedProposal
}