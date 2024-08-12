import report from "multiple-cucumber-html-reporter";

report.generate({
    jsonDir: 'cypress/cucumber-json',
    reportPath: '.reports/multiple-cucumber-htmlreport.html',
    metadata:{
        browser: {
            name: 'chrome',
            version: '127.0.6533.74'
        },
        device: 'Local test machine',
        platform: {
            name: 'Windows',
            version: '22H2'
        }
    },
    customData: {
        title: 'Cypress Automation BDD Report',
        data: [
            {label: 'Project Name', value: 'Petty Cash'},
            {label: 'Release', value: '0'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: ''},
            {label: 'Execution End Time', value: ''}
        ]
    }
});