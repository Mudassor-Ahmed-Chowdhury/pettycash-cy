import VoucherPage from "../pageobject/VoucherPage";
import BalancePage from "../pageobject/BalancePage";
import QueriesPage from "../pageobject/QueriesPage";
import GlobalPage from "../pageobject/GlobalPage";

describe("Reviewer review the voucher & approver approve the voucher", () => {
    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit('/');
    });

    const vc = new VoucherPage();
    const bap = new BalancePage();
    const qr = new QueriesPage();
    const gp = new GlobalPage();

    it("Verify the reviewer & approver perfom well enough", () =>{

        gp.Manageruser();
        vc.Voucher_siderbar();
        vc.Voucher_details();
        vc.Voucher_reviews();
        vc.setReview_comment("Make your voucher recheck if either found any error or issue then solve it neither it's ok")
        vc.Submitreview();
    });

    it("Verify the resolver resolve the review", () => {

        gp.Stmuser();
        vc.Voucher_siderbar();
        vc.Voucher_details();
        vc.Voucher_reviews();
        vc.setResolve_comment("Nothing change all ok");
        vc.Submit_resolve();
    });

    it("Verify verified the review from queries then approver approve the verified voucher", () =>{

        gp.Manageruser();
        qr.Querissidebar(); //Reviewer verify the review then approve the verified review
        qr.Queriesvouchernumber();
        qr.Queriesvouchercursor();
        qr.Vouchermatches();
        qr.Queriesvouchercreatedby();
        gp.Navigatetoback();
        qr.Queriesverify();
        qr.Queriesverifyvoucher();
        vc.Voucher_details();
        vc.Voucherapprove();
        vc.Verifyapprove();
        bap.Balancesidebar();

    })
})