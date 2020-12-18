const axios = require("axios");
const secretFile = require("../secrets/example.json");

class CrudAPI {
    constructor() {}

    create_something(categoryId, dataObj) {
        let url = `https://api.example.co/api/category/${categoryId}/secondaryCategory`;
        let body = JSON.stringify(dataObj);

        return axios
            .post(url, body, {
                headers: {
                    Authorization: secretFile.Bearer_Token,
                    "content-type": "application/json"
                }
            })
            .then(response => {
                console.log(`Created Something: ${response.data.name}`);
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Service Error ${err.response.status}:  ${
                        err.response.statusText
                    }`
                );
            });
    }

    get_something(categoryId, secondaryCategoryId) {
        let url = `https://api.example.co/api/category/${categoryId}/secondaryCategory/${secondaryCategoryId}`;

        return axios
            .get(url, { headers: { Authorization: secretFile.Bearer_Token } })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    get_somethings(categoryId) {
        let url = `https://api.example.co/api/category/${categoryId}/secondaryCategory`;

        return axios
            .get(url, { headers: { Authorization: secretFile.Bearer_Token } })
            .then(response => {
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Service Error ${err.response.status}:  ${
                        err.response.data.message
                    }`
                );
            });
    }

    update_something(categoryId, secondaryCategoryId, dataObj) {
        let url = `https://api.example.co/api/category/${categoryId}/secondaryCategory/${secondaryCategoryId}`;
        let body = JSON.stringify(dataObj);

        return axios
            .put(url, body, {
                headers: {
                    Authorization: secretFile.Bearer_Token,
                    "content-type": "application/json"
                }
            })
            .then(response => {
                console.log(`Updated Something: ${response.data.name}`);
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Service Error ${err.response.status}:  ${
                        err.response.statusText
                    }`
                );
            });
    }

    delete_something(categoryId, secondaryCategoryId) {
        let url = `https://api.example.co/api/category/${categoryId}/secondaryCategory/${secondaryCategoryId}`;

        return axios
            .delete(url, {
                headers: {
                    Authorization: secretFile.Bearer_Token,
                    "content-type": "application/json"
                }
            })
            .then(response => {
                console.log(`Deleted Something: ${response.data.name}`);
                return response.data;
            })
            .catch(err => {
                console.log(
                    `Service Error ${err.response.status}:  ${
                        err.response.statusText
                    }`
                );
            });
    }
}

module.exports = new CrudAPI();
