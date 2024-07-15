class VoucherPage
{
    Voucher_siderbar()
    {
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/aside[1]/div[1]/ul[1]/li[4]/a[1]/span[1]").click();
    }

    Createvoucher()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center'] span").click();
    }

    Selectbills()
    {
        cy.get("div[role='combobox']").click();
    }

    //Staticdropdown
    Billnumberselected()
    {
        cy.get("li[id='multiselect-option-2401000060'] span").click();
    }
    //Markdown_monitor
    Markdown()
    {
        cy.xpath("(//*[name()='svg'][@role='img'])[11]").should('be.visible').click();
    }
    setNarration(narration)
    {
        cy.get("div[id='md-editor-v3_2'] div[role='textbox']").clear().type(narration);
    }
    Multiselectremove()
    {
        cy.get("//div[normalize-space()='2401000061']//span[@class='multiselect-tag-remove']").click();
    }
    Selectreviewer()
    {
        const users = ['Admin', 'Arafat', 'Tania'];
        users.forEach(user => {
            cy.get("select[class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg']").select(user);
        });
    }
    Vouchercreatebutton()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']").click();
    }

    Randomlychoosebillnumber() {

        cy.get("div[role='combobox']").click();
        cy.xpath('//ul[@id="multiselect-options"]/li').then(($elements) => {
            const randomOption = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomOption]).click();
            cy.log(`random option selected is ${$elements[randomOption].innerText}`);
        })}
    Voucheredit() {
        cy.get('table.w-full.text-sm.text-left.text-gray-500.dark\\:text-gray-400 tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    cy.log($col.text().trim());
                });
            });

            cy.wrap($row).find('th.px-6.py-3.text-xs.uppercase.flex.justify-end', { timeout: 10000 })
                .should('exist')
                .should('be.visible')
                .then(($statusColumn) => {
                    const statusText = $statusColumn.text().trim();
                    cy.log('Status text:', statusText);

                    if (statusText === 'In-Review') {
                        cy.wrap($row).find('button.editable-icon')
                            .should('be.visible')
                            .should('be.enabled')
                            .click();
                    }
                });
        });
    }
    Voucher_edit()
    {
        cy.xpath("//tbody/tr[1]/td[11]/div[1]/div[1]/button[1]//*[name()='svg']").click();
    }
    setVoucher_editcomment(editcomment)
    {
        cy.get("div[role='textbox']").type(editcomment);
    }
    Voucher_updatebutton()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']").should("be.enabled").click();

    }
    Voucher_details()
    {
        cy.get("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) div:nth-child(2) button:nth-child(1) svg").should("be.visible").click();
    }

    Voucher_reviews()
    {
        cy.xpath("//div[contains(text(),'Reviews')]").should("be.visible").click();
    }

    setReview_comment(comment)
    {
        cy.get("div[role='textbox']").click().clear().type(comment);
    }

    Submitreview()
    {
        cy.xpath("//span[normalize-space()='Submit Review']").click();
    }
    setResolve_comment(resolve)
    {
        cy.get("div[role='textbox']").click().clear().type(resolve);
    }
    Submit_resolve()
    {
        cy.xpath("//span[normalize-space()='Resolve Review']").should("be.visible").click();
    }
    Voucherverify()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-4 py-2 inline-flex items-center'] span").click();
    }
    Verifyvoucher()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-3 py-1.5 inline-flex items-center']").click();
    }
    Voucherapprove()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']").click();
    }
    Verifyapprove()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-3 py-1.5 inline-flex items-center']").click();
    }
    Vouchernumber()
    {
        //cy.get(".flex.w-full.justify-start.space-x-2").then($el => { const textContent = $el.text()});
        cy.get(".flex.w-full.justify-start.space-x-2")
            .then($el => {
                const textContent = $el.text();
                cy.wrap(textContent).as('vouchernumber');
            })
    }


















}
export default VoucherPage