class Login
{
   setEmail(email)
   {
       cy.get("#email").clear().type(email);
   }

   setPassword(password)
   {
       cy.get("#password").clear().type(password);
   }


   Loginbutton()
   {
       cy.get("button[class='inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ms-4 mt-4 !rounded-full']").click();
   }

   VerifyLogin()
   {
       cy.get("div[class='title mb-4 print:hidden']").should('have.text','Dashboard');
   }

   Verifyinvalid_email_password()
   {
       cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > div:nth-child(3) > p:nth-child(1)").should('have.text', 'Your account not found or inactive! Please contact your administrator');
   }



}

export default Login;