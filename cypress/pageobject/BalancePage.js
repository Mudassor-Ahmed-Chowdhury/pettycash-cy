class BalancePage {
    Balancesidebar()
    {
        cy.get('a.flex.items-center.p-2.text-gray-900.rounded-lg.group.hover\\:bg-blue-100[href="http://sutaay.com/transactions"]')
            .click();

    }

    Lasttransaction()
    {
        cy.xpath("(//div[@id='md-editor-v3_104-preview'])[1]")
            .should('exist').then($el => {
            const textContent = $el.text();
            cy.wrap(textContent).as('lastvouchernumber');
        });
    }

    Balanceoverviewbackground()
    {
        cy.get(".flex.justify-between.border.rounded.p-4.mt-4")
            .should('be.visible').click();
    }

    Balancerequest()
    {
        cy.get("button[class='mt-2 bg-white text-blue-500 border border-blue-500 px-2 py-1 rounded-md text-sm hover:bg-blue-500 hover:text-white']")
            .should('be.visible').click();
    }

    setRequestamount(requestamount)
    {
        cy.get("input[placeholder='Ex: 1000']").should('be.visible')
            .click().clear().type(requestamount);
    }

    setReimbursementdetails(reimbursementdetails)
    {
        cy.get("div[role='textbox']").should('be.visible')
            .click().clear().type(reimbursementdetails);
    }

    Reimbursementrequestsubmit()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']")
            .wait(1000).click();
    }

    Reimbursementstatus()
    {
        cy.get("div[class='flex items-center justify-center h-6 text-[12px] rounded-xl capitalize bg-yellow-100 text-black-800 px-2 py-1']")
            .should('have.text', 'Pending');
    }

    Reimbursmentdetailscation()
    {
        cy.get("tbody tr:nth-child(1) td:nth-child(8) div:nth-child(1) button:nth-child(1) svg")
            .should('be.visible').click();
    }

    Requestamount()
    {
        cy.get(".text-xl.font-semibold").wait(1000)
            .then($el => {
                const textContent = $el.text();
                const requestAmount = parseFloat(textContent.replace(/[^0-9.]/g, ''));
                cy.wrap(requestAmount).as('requestamount');
            });
    }

    Reimbursementapproveamount()
    {
        this.Requestamount();
        cy.get("input[placeholder='Ex: 12,000']").invoke('val')
            .then((actualValue) => {
            cy.get('@requestamount')
                .then((expectedValue) => {
                const formattedExpectedValue = String(expectedValue).replace(/[৳,]/g, '');
                if (actualValue !== formattedExpectedValue) {
                    cy.log(`Values do not match! Actual Value: ${actualValue}, Expected Value: ${formattedExpectedValue}`);
                }
                expect(actualValue).to.equal(formattedExpectedValue);
                cy.log(`Actual Value: ${actualValue}, Expected Value: ${formattedExpectedValue}`);
            });
        });
    }

    Reimbursementtablestatuspending()
    {
        cy.get("div[class='relative overflow-x-auto shadow-md sm:rounded-lg']")
            .within(() => {
            cy.get("table[class='w-full text-sm text-left text-gray-500 dark:text-gray-400']")
                .within(() => {
                let pendingCount = 0;
                cy.get("tbody tr").each(($row) => {
                    cy.wrap($row).find("td:nth-child(6)")
                        .then(($statusColumn) => {
                        const statusText = $statusColumn.text().trim();
                        if (statusText === 'pending') {
                            pendingCount++;
                            cy.wrap($row).find("td:nth-child(8)")
                                .then(($actionColumn) => {
                                cy.wrap($actionColumn).find("button").click();
                            });
                        }
                    });
                }).then(() => {
                    cy.log(`Number of pending statuses: ${pendingCount}`);
                });
            });
        });
    }

    Reimbursmenttablestatusapprove() {
        cy.get("div[class='relative overflow-x-auto shadow-md sm:rounded-lg']")
            .within(() => {
            cy.get("table[class='w-full text-sm text-left text-gray-500 dark:text-gray-400']")
                .within(() => {
                let approvedCount = 0;
                cy.get("tbody tr").each(($row) => {
                    cy.wrap($row).find("td:nth-child(6)")
                        .then(($statusColumn) => {
                        const statusText = $statusColumn.text().trim();
                        if (statusText === 'approved') {
                            approvedCount++;
                            cy.wrap($row).find("td:nth-child(8)")
                                .then(($actionColumn) => {
                                cy.wrap($actionColumn).find("button").click();
                            });
                        }
                    });
                }).then(() => {
                    cy.log(`Number of approved statuses: ${approvedCount}`);
                });
            });
        });
    }

    setsourceofreimbursemnt(sourcevalue)
    {
        cy.get("div[role='textbox']").type(sourcevalue).wait(3000);
    }

    Recivebutton()
    {
        cy.xpath("//span[normalize-space()='Received']")
            .as('btn').wait(3000).click();
    }

    Modalrecivedbutton()
    {
        cy.xpath("//div[@id='headlessui-portal-root']//button[2]//span[1]")
            .as('btn').click();
    }
    Reimbursmentbackground()
    {
        cy.get("div[class='flex flex-col min-h-screen justify-between transition-all duration-200 px-4 sm:ml-64 pt-[72px] print:p-0 print:sm:ml-0 layout-main-container']")
            .as('btn').click().wait(1000);
    }

    Approvebutton()
    {
      cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-4 py-2 inline-flex items-center print:hidden']")
          .as('btn').click().wait(1000);
    }

    Verifyapprovebutton()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-3 py-1.5 inline-flex items-center']").
        as('btn').click().wait(1000);
    }

    Reimbursementbutton()
    {
        cy.get("button[class='mt-2 bg-blue-500 text-white border border-blue-500 px-2 py-1 rounded-md text-sm hover:bg-white hover:text-blue-500']")
            .click().wait(3000);
    }

}

export default BalancePage;
