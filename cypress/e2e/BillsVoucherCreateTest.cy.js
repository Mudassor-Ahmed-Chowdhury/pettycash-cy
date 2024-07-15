
import LoginPage from "../pageobject/LoginPage";
import VoucherPage from "../pageobject/VoucherPage";

describe('Voucher Create', () =>{

    it('Verify the voucher with valid data', () => {
        cy.set1080pViewport();
        cy.visit("http://sutaay.com/login");
        const ln  = new LoginPage();
        const vc = new VoucherPage();

        //Login as a "Initiator (Mudassor)"
        ln.setEmail("stm@pc.com");
        cy.wait(1000);
        ln.setPassword("password");
        cy.wait(1000);
        ln.Loginbutton();
        cy.wait(4000);
        ln.VerifyLogin();
        cy.wait(4000);
        vc.Voucher_siderbar();
        cy.wait(4000);

        //For create voucher functionality
        vc.Createvoucher();
        cy.wait(4000);
        vc.Randomlychoosebillnumber();
        vc.Selectbills();
        cy.wait(3000);
        vc.Selectreviewer();
        cy.wait(5000);
        vc.Vouchercreatebutton();
        cy.wait(3000);

        //For voucher edit functionality
        vc.Voucher_edit();
        cy.wait(3000);
        vc.setVoucher_editcomment("**Lorem Ipsum** \n" +
            "<u>is simply dummy text of the printing and typesetting industry.</u>\n" +
            "- Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n" +
            "- It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
        cy.wait(5000);
        vc.Voucher_updatebutton();

    })
})
