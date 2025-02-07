const { defineConfig } = require("cypress");
const yinPlugin = require("./src/plugin");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      yinPlugin(on, config);
      // implement node event listeners here
    },
  },
  env: {
    mysql: {
      host: "xx.xx.xx.xxx",
      port: "3306",
      user: "user",
      password: "password",
      database: "DATABASE",
      // multipleStatements: true,
      // dateStrings: true,
      // decimalNumbers: true,
    },
  },
});
