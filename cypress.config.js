module.exports = {
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    //baseUrl: 'http://sutaay.com',
    pageLoadTimeout: 120000,
    experimentalRunAllSpecs: true,
    setupNodeEvents(on,config){
      config.specPattern =[
          'cypress/e2e/BillsCreateTest.cy.js',
          'cypress/e2e/BillsVoucherCreateTest.cy.js',
          'cypress/e2e/ReviewerTest.cy.js'
      ]
    }
  },
};
