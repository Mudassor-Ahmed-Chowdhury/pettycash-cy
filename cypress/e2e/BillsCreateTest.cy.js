import LoginPage from "../pageobject/LoginPage";
import BillsPage from "../pageobject/BillsPage";
import billsPage from "../pageobject/BillsPage";


describe('Initiator -Bills Create', () => {

    it('Verify that bills create successful with valid data', () => {
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const ln = new LoginPage();
        const bp = new BillsPage();

        // For bills create as a "Initiator (Anamul)"
        ln.setEmail("jtm@pc.com");
        cy.wait(2000);
        ln.setPassword("password");
        cy.wait(2000);
        ln.Loginbutton();
        cy.wait(2000);
        ln.VerifyLogin();
        cy.wait(2000)
        bp.Sidebarbills();
        cy.wait(2000)

        //For bills create functionality
        bp.Addnew();
        cy.wait(2000)
        bp.Chosebilldate();
        cy.wait(2000)
        bp.Activedate();
        cy.wait(2000)
        bp.Select_items();
        cy.wait(2000)
        bp.Select_office_equipment();
        cy.wait(2000)
        bp.Select_items();
        bp.setMonitor('100');
        cy.wait(2000);
        bp.setDeskchair('101');
        cy.wait(3000);
        bp.setPcaccesories('111');
        //bp.Select_voucher();
        bp.Createbutton();
        cy.wait(2000);



    });

});
