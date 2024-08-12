import GlobalPage from "../pageobject/GlobalPage";
import UserPage from "../pageobject/UserPage";

describe("Add User - User Create Functional Testing", () => {
    const us = new UserPage();
    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'),Cypress.config('viewportHeight'));
        cy.visit('/');
        const gp = new GlobalPage();
        gp.Adminuser();
        gp.Globalsidebarfullbox();
        us.Userpagesidebar();
        us.Adduser();

    });

    it('Verify the first name field  should perform well', () =>{

        us.Firstnamefield('!@#');
        us.Firstnamefield('1234');
        us.Firstnamefield('John Doe');
    });

    it('Verify the second name field  should perform well', () =>{

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

    it('Verify the create user functionality with invalid data', () => {
        us.Invaliduserdata();
    })


})