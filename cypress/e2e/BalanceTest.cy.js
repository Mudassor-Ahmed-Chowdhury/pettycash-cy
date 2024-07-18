import LoginPage from "../pageobject/LoginPage";
import BalancePage from "../pageobject/BalancePage";

describe("Balance Test", () =>{
    it('Verify that initiator create reimbursement request', () =>{
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const ln = new LoginPage();
        const bap = new BalancePage();

        //Login as a Initiator (Mudassor)
        ln.setEmail("stm@pc.com");
        ln.setPassword("password");
        ln.Loginbutton();
        ln.VerifyLogin();


        //Create Reimbursement Request
        bap.Balancesidebar();
        bap.Balancerequest();
        bap.setRequestamount('200');
        bap.setReimbursementdetails("That amount need for office expense");
        bap.Reimbursementrequestsubmit();
    });

    it('Verify that approver or admin approve the reimbursement request', () => {
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const ln = new LoginPage();
        const bap = new BalancePage();

        //Login as a approver or admin (Tania / Arafat)
        ln.setEmail("manager@pc.com");
        ln.setPassword("password");
        ln.Loginbutton();
        ln.VerifyLogin();

        //Approve The Reimbursement Request
        bap.Balancesidebar();
        bap.Reimbursementbutton();
        bap.Reimbursementtablestatuspending();
        bap.Reimbursementapproveamount();
        //bap.Reimbursmentbackground();
        bap.Approvebutton();
        bap.Verifyapprovebutton();

    })

    it('Verify the reciver or initiator section to performimng recive amount', ()=>{
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const ln = new LoginPage();
        const bap = new BalancePage();

        //Login as a Initiator (Mudassor)
        ln.setEmail("stm@pc.com");
        ln.setPassword("password");
        ln.Loginbutton();
        ln.VerifyLogin();

        //Reciver recive the amount
        bap.Balancesidebar();
        bap.Reimbursementbutton();
        bap.Reimbursmenttablestatusapprove();
        bap.Recivebutton();
        bap.setsourceofreimbursemnt('   ');
        bap.Modalrecivedbutton();




    })
} )