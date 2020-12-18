const axios = require("axios");
const fs = require("fs");
const secretFile = require("../secrets/example.json");

class DynamicAPI {
    constructor() {
        this.token = JSON.parse(
            fs.readFileSync("../secrets/token.json", "UTF-8")
        );
        this.headers = {
            Accept: "application/vnd.api+json;revision=1",
            "Content-Type": "application/vnd.api+json",
            "X-Api-Key": secretFile.X_Api_Key,
            Authorization: this.token.access_token
        };
        this.url = "";
    }

    async get_bearer() {
        let url = "https://authservice.net/api/jwt";
        let body = secretFile.client_secret;
        let headers = {
            "Cache-Control": "no-cache",
            "Content-Type": "application/x-www-form-urlencoded"
        };

        return axios
            .post(url, body, headers)
            .then(response => {
                fs.writeFileSync(
                    "../secrets/token.json",
                    JSON.stringify(response.data)
                );
                this.token = response.data;
                this.headers.Authorization = this.token.access_token;
            })
            .catch(err => {
                console.log(
                    `Service Error: ${err.response.status}: ${
                        err.response.data.message
                    }`
                );
            });
    }

    generateRequestURL(objectType, objectId, secondaryObjectType = null) {
        if (secondaryObjectType) {
            this.url = `https://api.example.com/${objectType}/${objectId}/${secondaryObjectType}`;
            return this;
        } else {
            this.url = `https://api.example.com/${objectType}/${objectId}`;
            return this;
        }
    }

    get() {
        return axios
            .get(this.url, { headers: this.headers })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                if (
                    err.response.statusText == "Unauthorized" ||
                    err.response.statusText == "Forbidden"
                ) {
                    console.log(`Service Token Error: Getting New Token`);
                    this.get_bearer();
                } else {
                    console.log(
                        `Service Error ${err.response.status}:  ${
                            err.response.data.message
                        }`
                    );
                }
            });
    }

    post(ruleObject) {
        let body = JSON.stringify(ruleObject);

        return axios
            .post(this.url, body, { headers: this.headers })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
                console.log(
                    `Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    patch(ruleObject) {
        let body = JSON.stringify(ruleObject);

        return axios
            .patch(this.url, body, { headers: this.headers })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(err);
                console.log(
                    `Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    delete() {
        return axios
            .delete(this.url, { headers: this.headers })
            .then(response => {
                return response;
            })
            .catch(err => {
                if (
                    err.response.statusText == "Unauthorized" ||
                    err.response.statusText == "Forbidden"
                ) {
                    console.log(`Service Token Error: Getting New Token`);
                    this.get_bearer();
                } else {
                    console.log(
                        `Service Error ${err.response.status}:  ${
                            err.response.data.message
                        }`
                    );
                }
            });
    }
}

module.exports = new DynamicAPI();
