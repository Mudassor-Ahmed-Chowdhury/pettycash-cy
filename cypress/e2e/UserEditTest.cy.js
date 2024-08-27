import UserPage from "../pageobject/UserPage";
import GlobalPage from "../pageobject/GlobalPage";

describe("Add User - User Create Functional Testing", () => {
    const us = new UserPage();
    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit('/');
        const gp = new GlobalPage();
        gp.Adminuser();
        gp.Globalsidebarfullbox();
        us.Userpagesidebar();
        us.clickEditiconfirstrow();

    });

    it('Should not update succesffuly with invalid data', () => {
        us.Invalidedituserdata();
    });

    it('Verify the edit first name field  should perform well', () =>{
        us.Editfirstnamefield('!@#');
        us.Editfirstnamefield('1234');
        us.Editfirstnamefield('John Doe');
    });

    it('Verify the edit second name field  should perform well', () =>{

        us.Secondnamefield('!@#');
        us.Secondnamefield('1234');
        us.Secondnamefield('John Doe');
    });

    it('Verify the phone number field validation', () => {

        us.Validatecontactnumber('0123456789');
        us.Validatecontactnumber('012345678912');
        us.Validatecontactnumber('01234567891');
        us.Validatecontactnumber('01773672876');

    });

    it('Verify the email invalid email functionality', () => {
        us.setEmailAndVerifyErrors();
    });


})