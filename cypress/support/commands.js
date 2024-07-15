
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




