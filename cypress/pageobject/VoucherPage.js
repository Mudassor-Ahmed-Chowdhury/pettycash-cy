class VoucherPage
{
    Voucher_siderbar()
    {
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/aside[1]/div[1]/ul[1]/li[4]/a[1]/span[1]").wait(3000).click();
    }

    Createvoucher()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center'] span")
            .wait(3000).click();
    }

    Selectbills()
    {
        cy.get("div[role='combobox']").click();
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
            cy.get("select[class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg']")
                .wait(2000).select(user);
        });
    }

    Vouchercreatebutton()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']")
            .wait(3000).click();
    }

    Randomlychoosebillnumber()
    {
        cy.get("div[role='combobox']").click();
        cy.xpath('//ul[@id="multiselect-options"]/li')
            .then(($elements) => {
            const randomOption = Math.floor(Math.random() * $elements.length);
            cy.wrap($elements[randomOption]).click();
            cy.log(`random option selected is ${$elements[randomOption].innerText}`);
        })
    }


    setVoucher_editcomment(editcomment)
    {
        cy.get("div[role='textbox']")
            .wait(3000).type(editcomment);
    }

    Voucher_updatebutton()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']")
            .should("be.enabled").wait(3000).click();

    }

    Voucher_details()
    {
        cy.get("tbody tr:nth-child(1) td:nth-child(11) div:nth-child(1) div:nth-child(2) button:nth-child(1) svg")
            .should("be.visible").wait(3000).click();
    }

    Voucher_reviews()
    {
        cy.xpath("//div[contains(text(),'Reviews')]")
            .should("be.visible").click();
    }

    setReview_comment(comment)
    {
        cy.get("div[role='textbox']")
            .click().wait(3000).clear().type(comment);
    }

    Submitreview()
    {
        cy.get("button:nth-child(2)").click();
    }

    setResolve_comment(resolve)
    {
        cy.get("div[role='textbox']")
            .click().wait(3000).clear().type(resolve);
    }

    Submit_resolve()
    {
        cy.xpath("//span[normalize-space()='Resolve Review']")
            .should("be.visible").click();
    }

    Voucherverify()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-4 py-2 inline-flex items-center'] span")
            .wait(3000).click();
    }

    Verifyvoucher()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-3 py-1.5 inline-flex items-center']")
            .wait(3000).click();
    }

    Voucherapprove()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']")
            .wait(3000).click();
    }

    Verifyapprove()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-3 py-1.5 inline-flex items-center']")
            .wait(3000).click();
    }

    Vouchernumber()
    {
        cy.get(".flex.w-full.justify-start.space-x-2").wait(3000)
            .then($el => {
                const textContent = $el.text();
                cy.wrap(textContent).as('vouchernumber');
            })
    }

    voucherDate(){

        cy.xpath("(//input[@placeholder='Select Date'])[1]").click();
        cy.xpath("(//div[@class='dp__cell_inner dp__pointer dp__today dp__active_date'])[1]").click(); //Current data select

    }

    voucherEdit() {
        let statusFound = false;

        return cy.xpath("(//table[@class='w-full text-sm text-left text-gray-500 dark:text-gray-400'])[1]")
            .xpath("//tbody[1]/tr").each(($row) => {

            cy.wrap($row).xpath("td[8]").invoke('text').then((statusText) => {
                cy.log('Status text:', statusText.trim());


                if (statusText.trim() === 'In-Review') {
                    statusFound = true;


                    cy.wrap($row).xpath("td[11]//*[name()='svg'][@role='img']").then(($editButton) => {

                        if ($editButton.is(':enabled')) {
                            cy.log('Edit button is enabled, clicking...');
                            cy.wrap($editButton).click();
                        } else {
                            cy.log('Edit button is disabled.');
                            throw new Error('Edit button is disabled.');
                        }
                    });
                }
            });
        }).then(() => {

            if (!statusFound) {
                cy.log('Status "In-Review" not found, stopping the runner.');
                cy.task('stopRunner');
            }
        });
    }




}
export default VoucherPage