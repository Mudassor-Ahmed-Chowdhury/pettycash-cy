const { defineConfig } = require("cypress");
const { exec } = require('child_process');

module.exports = defineConfig({
    reporter: "cypress-mochawesome-reporter",
    e2e: {
        pageLoadTimeout: 120000,
        experimentalRunAllSpecs: true,
        baseUrl: "http://sutaay.com/login",
        viewportWidth: 1920,
        viewportHeight: 1080,
        setupNodeEvents(on, config) {
            // Register the mochawesome reporter plugin
            require("cypress-mochawesome-reporter/plugin")(on);

            // Define the stopRunner task
            on('task', {
                stopRunner() {
                    // Kill the Cypress process
                    exec('kill $(pgrep -f cypress)', (error) => {
                        if (error) {
                            console.error(`Error stopping Cypress runner: ${error.message}`);
                            return;
                        }
                        console.log('Cypress runner stopped.');
                    });
                    return null; // Returning null to indicate task completion
                }
            });

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

            return config; // Return the updated config
        }
    }
});
