import LoginPage from "../pageobject/LoginPage";
import BillsPage from "../pageobject/BillsPage";



describe('Initiator -Bills Create', () => {

    it('Verify that bills create successful with valid data', () => {
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const ln = new LoginPage();
        const bp = new BillsPage();

        // For bills create as a "Initiator (Anamul)"
        ln.setEmail("jtm@pc.com");
        ln.setPassword("password");
        ln.Loginbutton();
        ln.VerifyLogin();
        bp.Sidebarbills();

        //For bills create functionality
        bp.Addnew();
        bp.Chosebilldate();
        bp.Activedate();
        bp.Select_items();
        bp.Select_office_equipment();
        bp.Select_items();
        bp.setMonitor('100');
        bp.setDeskchair('101');
        bp.setPcaccesories('111');
        //bp.Select_voucher();
        bp.Createbutton();


    });

});
