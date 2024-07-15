class BalancePage{
    Balancesidebar()
    {
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/aside[1]/div[1]/ul[1]/li[5]/a[1]").click();
    }
    Lasttransaction()
    {
        cy.xpath("(//div[@id='md-editor-v3_104-preview'])[1]").should('exist').then($el =>{
            const textContent = $el.text();
            cy.wrap(textContent).as ('lastvouchernumber')
        })
    }

    Balanceoverviewbackground()
    {
        cy.get(".flex.justify-between.border.rounded.p-4.mt-4").should('be.visible').click();
    }
}
export default BalancePage;