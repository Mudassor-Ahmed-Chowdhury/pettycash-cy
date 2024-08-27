const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: "cypress-mochawesome-reporter",
    e2e: {
        pageLoadTimeout: 120000,
        experimentalRunAllSpecs: true,
        baseUrl: "http://sutaay.com/login",
        viewportWidth: 1920,
        viewportHeight: 1080,
        setupNodeEvents(on, config) {
            require("cypress-mochawesome-reporter/plugin")(on);

            // Specify the spec patterns for the tests
            config.specPattern = [
                "C:\\Users\\SOFTZINO\\cypress\\pettycash-cy\\cypress\\e2e\\BalanceTest.cy.js",
                "C:\\Users\\SOFTZINO\\cypress\\pettycash-cy\\cypress\\e2e\\ExpensseCatTest.cy.js",
                "C:\\Users\\SOFTZINO\\cypress\\pettycash-cy\\cypress\\e2e\\BillsCreateTest.cy.js",
                "C:\\Users\\SOFTZINO\\cypress\\pettycash-cy\\cypress\\e2e\\BillsVoucherCreateTest.cy.js",
                "C:\\Users\\SOFTZINO\\cypress\\pettycash-cy\\cypress\\e2e\\ReviewerTest.cy.js",
                "C:\\Users\\SOFTZINO\\cypress\\pettycash-cy\\cypress\\e2e\\UserCreateTest.cy.js",
                "C:\\Users\\SOFTZINO\\cypress\\pettycash-cy\\cypress\\e2e\\UserEditTest.cy.js"
            ];

            return config;
        }
    }
});
