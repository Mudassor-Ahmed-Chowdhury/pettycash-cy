// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
import LoginPage from "../pageobject/LoginPage";


Cypress.Commands.add('set1080pViewport', () => { cy.viewport(1920, 1080); });
Cypress.Commands.add('login', (email, password) => {
 cy.session([email, password], () =>
 {
  cy.visit("http://sutaay.com/login")
  cy.get("#email").clear().type(email)
  cy.get("#password").clear().type(password)
  cy.get("button[class='inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-4 mt-4 !rounded-full']").click()

 })
     {
      cacheAcrossSpecs: true
     }

});




