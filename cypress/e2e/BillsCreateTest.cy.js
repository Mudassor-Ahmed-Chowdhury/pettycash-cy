import LoginPage from "../pageobject/LoginPage";
import BillsPage from "../pageobject/BillsPage";
import GlobalPage from "../pageobject/GlobalPage";

describe('Initiator -Bills Create', () => {
    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit('/');
    });

    const gp = new GlobalPage();
    const bp = new BillsPage();

    it('Verify that bills create successful with valid data', () => {

        gp.Jtmuser();
        bp.Sidebarbills();
        bp.Addnew();//For bills create functionality
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
        gp.iframeLocatorFunction();

    });

});
