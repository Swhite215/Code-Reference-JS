
const mysql = require("mysql");
const path = require("path");
const fs = require("fs");
const util = require("util");
const readFile = util.promisify(fs.readFile);

let name = "Spencer";
let query = "INSERT INTO table (name) VALUES (?)";
let parameters = [name];
let sql = mysql.format(query, parameters);

const executeSql = async (sql) => {
    // Fetch the dbClient info
    let dbClient = await prepareConnection();
  
    // Return Promise of Query
    return new Promise((resolve, reject) => {
      dbClient.connect(function (err) {
        if (err) {
          console.error("error connecting: " + err.stack);
          return;
        }
  
        dbClient.query(sql, function (error, results, fields) {
          if (error) {
            console.log(error);
            reject("Error executing SQL");
          }
          resolve(results);
        });
  
        dbClient.end();
      });
    });
  };


  const prepareConnection = async () => {
 
    // Local MySQL Docker Container
    let clientConfig = {
      host: "localhost",
      user: "root",
      password: "my-secret-pw",
      port: "3306",
      database: "test-db",
    };
  
    // Create a Connection
    let dbClient = mysql.createConnection(clientConfig);
  
    return dbClient;
  };

  executeSql(sql);