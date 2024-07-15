import VoucherPage from "../pageobject/VoucherPage";
import LoginPage from "../pageobject/LoginPage";
import BalancePage from "../pageobject/BalancePage";

describe("Reviewer review the voucher & approver approve the voucher", () => {
    it("Verify the reviewer & approver perfom well enough", () =>{
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const vc = new VoucherPage();
        const ln = new LoginPage();

        ln.setEmail("manager@pc.com");
        cy.wait(3000);
        ln.setPassword("password");
        cy.wait(2000);
        ln.Loginbutton();
        cy.wait(3000);
        ln.VerifyLogin();
        vc.Voucher_siderbar();
        cy.wait(3000);
        vc.Voucher_details();
        cy.wait(3000);
        vc.Voucher_reviews();
        vc.setReview_comment("Make your voucher recheck if either found any error or issue then solve it neither it's ok")
        cy.wait(3000);
        vc.Submitreview();
    });

    it("Verify the resolver resolve the review", () => {
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const vc = new VoucherPage();
        const ln = new LoginPage();

        ln.setEmail("stm@pc.com");
        cy.wait(2000);
        ln.setPassword("password");
        cy.wait(2000);
        ln.Loginbutton();
        cy.wait(4000);
        ln.VerifyLogin();
        cy.wait(4000);
        vc.Voucher_siderbar();
        cy.wait(5000);
        vc.Voucher_details();
        cy.wait(5000);
        vc.Voucher_reviews();
        cy.wait(5000);
        vc.setResolve_comment("Nothing change all ok");
        cy.wait(5000);
        vc.Submit_resolve();
        cy.wait(5000);
    });

    it("Verify approver approve the voucher", () =>{
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const ln = new LoginPage();
        const vc = new VoucherPage();
        const bap = new BalancePage();
        ln.setEmail("manager@pc.com");
        cy.wait(2000);
        ln.setPassword("password");
        cy.wait(3000);
        ln.Loginbutton();
        ln.VerifyLogin();
        cy.wait(5000);
        vc.Voucher_siderbar();
        cy.wait(3000);
        vc.Voucher_details();
        cy.wait(5000);
        vc.Vouchernumber();
        vc.Voucher_reviews();
        cy.wait(5000);
        vc.Voucherverify();
        cy.wait(5000);
        vc.Verifyvoucher();
        cy.wait(5000);
        vc.Voucher_details();
        cy.wait(5000);
        vc.Voucherapprove();
        cy.wait(5000);
        vc.Verifyapprove();
        cy.wait(5000);
        bap.Balancesidebar();



    })



})