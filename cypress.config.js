const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges:false,
  defaultCommandTimeout:6000,
  html:false,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on); //report plugin

      // implement node event listeners here
    },
  },
  env:{
    //global configaration
URL2:'https://rahulshettyacademy.com/angularpractice/'

  },
  env:{
    //global configaration
URL1:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

  },

});