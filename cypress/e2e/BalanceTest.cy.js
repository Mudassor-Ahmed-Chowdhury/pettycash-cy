import LoginPage from "../pageobject/LoginPage";
import BalancePage from "../pageobject/BalancePage";
import GlobalPage from "../pageobject/GlobalPage";

describe("Balance Test", () =>{
    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit('/');
    });

    const gp = new GlobalPage();
    const bap = new BalancePage();

    it('Verify that initiator create reimbursement request', () =>{

        gp.Stmuser();
        bap.Balancesidebar();
        bap.Balancerequest();  //Create Reimbursement Request
        bap.setRequestamount('200');
        bap.setReimbursementdetails("That amount need for office expense");
        bap.Reimbursementrequestsubmit();
    });

    it('Verify that approver or admin approve the reimbursement request', () => {

        gp.Manageruser();
        bap.Balancesidebar();
        bap.Reimbursementbutton();
        bap.Reimbursementtablestatuspending();
        bap.Reimbursementapproveamount();  //Approve The Reimbursement Request
        //bap.Reimbursmentbackground();
        bap.Approvebutton();
        bap.Verifyapprovebutton();

    })

    it('Verify the reciver or initiator section to performimng recive amount', ()=>{

        gp.Stmuser();
        bap.Balancesidebar();
        bap.Reimbursementbutton();
        bap.Reimbursmenttablestatusapprove(); //Reciver recive the amount
        bap.Recivebutton();
        bap.setsourceofreimbursemnt('   ');
        bap.Modalrecivedbutton();

    })
} )