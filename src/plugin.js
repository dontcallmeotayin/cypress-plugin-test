const queryDB = require("./queryDB");

const yinPlugin = (on, config) => {
  on("task", {
    queryDB({ queryOrPath, isPath }) {
      return queryDB(config.env.mysql, queryOrPath, isPath);
    },
  });
};

module.exports = yinPlugin;
