import ExpanseCategoryPage from "../pageobject/ExpanseCategoryPage";
import BillsPage from "../pageobject/BillsPage";
import GlobalPage from "../pageobject/GlobalPage";

describe('Expensse Category', () => {
    beforeEach(() => {
        cy.viewport(Cypress.config('viewportWidth'), Cypress.config('viewportHeight'));
        cy.visit('/');
        const gp = new GlobalPage();
        gp.Adminuser();
    });

    const ec = new ExpanseCategoryPage();
    const bp = new BillsPage();
    const gp = new GlobalPage();

    it('Verify that duplicate or space value expense category should not be create', () => {

        ec.Expenssecategorysidebar();
        // ec.Expensecategorylist()
        // ec.expenssecategorymodal();
        ec.Addcategory();
        ec.checkButtonStateOnSpace("     ");
        ec.checkButtonStateOnSpace('Travel Expense');
        ec.Parentcategorysavebutton();
        ec.setInputsubcategoryname("Outing");
        ec.setInputsubcategorycode("300");
        ec.Submitbutton()

    })

    // it('Check all expense category should be show in bills expense list', () =>{
    //
    //     // ec.Expenssecategorysidebar();
    //     // ec.Expensecategorylist(); //Expense category's all contents are turn into ullist as a variable
    //     cy.wait(3000);
    //     bp.Sidebarbills();
    //     bp.Billsbackgroudbesidecreatebill();
    //     bp.Createbutton();
    //     bp.Select_items();
    //     // bp.checkExpenseList();
    //     // bp.fetchexpensecategoryLists();
    //     bp.Billlistmatcheswithexpenselist();
    //
    // })

})