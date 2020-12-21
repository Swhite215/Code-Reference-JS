const util = require("util");
const request = require("request");

const login = async() => {
    let challengeSecret = {
        "client_id": "12345456",
        "username": "Umbaku",
        "password": "EBomBay"
    }
    let requestPromise = util.promisify(request);

    let response = await requestPromise({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      uri:
        "https://loguserin:3000",
      body: challengeSecret,
    });

    console.dir("This is the response.body of wellnessScoreLogin:");
    console.dir(response.body);

    let credentials = response.body;

    return credentials;
}

login();