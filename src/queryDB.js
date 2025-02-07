const mysql = require("mysql2");
const fs = require("fs");

const queryDB = (connectionInfo, queryOrPath, options) => {
  const connection = mysql.createConnection(connectionInfo);

  let query;
  if (options?.isPath === true) {
    query = fs.readFileSync(queryOrPath).toString();
  } else {
    query = queryOrPath;
  }

  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    });
  });
};

module.exports = queryDB;
