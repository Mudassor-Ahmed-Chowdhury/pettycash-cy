
import LoginPage from "../pageobject/LoginPage";
import VoucherPage from "../pageobject/VoucherPage";
import GlobalPage from "../pageobject/GlobalPage";

describe('Voucher Create', () =>{

    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit('/');
    });

    const gp  = new GlobalPage();
    const vc = new VoucherPage();

    it('Verify the voucher with valid data', () => {

        gp.Stmuser();
        vc.Voucher_siderbar();
        vc.Createvoucher(); //For create voucher functionality
        vc.voucherDate();
        vc.Randomlychoosebillnumber();
        vc.Selectbills();
        vc.Selectreviewer();
        vc.Vouchercreatebutton();
        gp.iframeLocatorFunction();


    });

    it.skip('Verify the voucher with valid data in edit functionality', () =>{
        gp.Stmuser();
        vc.Voucher_siderbar();
        vc.voucherEdit()
        // // vc.Voucher_edit(); //For voucher edit functionality
        // vc.setVoucher_editcomment("**Lorem Ipsum** \n" +
        //     "<u>is simply dummy text of the printing and typesetting industry.</u>\n" +
        //     "- Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
        //     "- It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        // vc.Voucher_updatebutton();


    })

})
