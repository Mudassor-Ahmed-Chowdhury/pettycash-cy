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
        ln.setPassword("password");
        ln.Loginbutton();
        ln.VerifyLogin();
        vc.Voucher_siderbar();
        vc.Voucher_details();
        vc.Voucher_reviews();
        vc.setReview_comment("Make your voucher recheck if either found any error or issue then solve it neither it's ok")
        vc.Submitreview();
    });

    it("Verify the resolver resolve the review", () => {
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const vc = new VoucherPage();
        const ln = new LoginPage();

        ln.setEmail("stm@pc.com");
        ln.setPassword("password");
        ln.Loginbutton();
        ln.VerifyLogin();
        vc.Voucher_siderbar();
        vc.Voucher_details();
        vc.Voucher_reviews();
        vc.setResolve_comment("Nothing change all ok");
        vc.Submit_resolve();
    });

    it("Verify approver approve the voucher", () =>{
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const ln = new LoginPage();
        const vc = new VoucherPage();
        const bap = new BalancePage();
        ln.setEmail("manager@pc.com");
        ln.setPassword("password");
        ln.Loginbutton();
        ln.VerifyLogin();
        vc.Voucher_siderbar();
        vc.Voucher_details();
        vc.Vouchernumber();
        vc.Voucher_reviews();
        vc.Voucherverify();
        vc.Verifyvoucher();
        vc.Voucher_details();
        vc.Voucherapprove();
        vc.Verifyapprove();
        bap.Balancesidebar();



    })



})