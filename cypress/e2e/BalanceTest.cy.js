import LoginPage from "../pageobject/LoginPage";
import BalancePage from "../pageobject/BalancePage";
import GlobalPage from "../pageobject/GlobalPage";

describe("Balance Test", { tags: ['@regression', '@sanity'] }, () => {
    const gp = new GlobalPage();
    const bap = new BalancePage();

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit('/');
    });

    it('Verify that initiator creates reimbursement request', { tags: ['@regression', '@sanity'] }, () => {
        gp.Stmuser();
        bap.Balancesidebar();
        bap.Balancerequest();
        bap.setRequestamount('200');
        bap.setReimbursementdetails("That amount is needed for office expense");
        bap.Reimbursementrequestsubmit();
        // gp.iframeLocatorFunction();
    });

    it.only('Verify that approver or admin approves the reimbursement request', { tags: ['@sanity', '@regression'] }, () => {
        gp.Manageruser();
        bap.Balancesidebar();
        bap.Reimbursementbutton();
        bap.Reimbursementtablestatuspending();
        bap.Reimbursementapproveamount();
        bap.Approvebutton();
        bap.Verifyapprovebutton();
    });

    it('Verify the receiver or initiator section to perform receiving amount', { tags: ['@sanity', '@regression'] }, () => {
        gp.Stmuser();
        bap.Balancesidebar();
        bap.Reimbursementbutton();
        bap.Reimbursmenttablestatusapprove();
        bap.Recivebutton();
        bap.setsourceofreimbursemnt('   ');
        bap.Modalrecivedbutton();
    });
});
