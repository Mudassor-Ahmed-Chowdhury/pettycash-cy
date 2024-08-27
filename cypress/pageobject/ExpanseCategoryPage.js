class ExpanseCategoryPage{
    Addcategory()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']")
            .as('btn').click().wait(3000);
    }

    // setSearchfiled(searchexpense)
    // {
    //     cy.get("input[placeholder='search by name, code']").type(searchexpense).wait(2000);
    // }

    Expenssecategorysidebar()
    {
        cy.xpath("(//span[normalize-space()='Expense Categories'])[1]")
            .then($el => {
                cy.wrap($el).click();
            })
    }

    // expenssecategorymodal() {
    //     let testPassed = true;
    //     cy.xpath("(//div)[34]").should('be.visible').then((parent) =>
    //     {
    //         cy.wrap(parent).find('ul').each(($ul, index) =>
    //         {
    //             cy.wrap($ul).find('button:contains("Add More")').should('exist')
    //                 .and('be.visible')
    //                 .and('be.enabled')
    //                 .then(() =>
    //                 {
    //                     cy.log(`Button "Add More" found and clickable in ul #${index + 1}`);
    //                 })
    //         }).then(() =>
    //         {
    //             if (!testPassed)
    //             {
    //                 cy.log("Test case failed: One or more 'ul' elements do not contain a clickable 'Add More' button.");
    //                 return ;
    //             }
    //             if (testPassed)
    //             {
    //                 cy.log("Test case passed: All 'ul' elements contain a clickable 'Add More' button.");
    //             }
    //         });
    //     });
    // }

    expenssecategorymodal()
    {
        let testPassed = true;
        let addMoreCount = 0;
        let addCount = 0;
        cy.xpath("(//div)[34]").should('be.visible').then((parent) => {
            cy.wrap(parent).find('ul').each(($ul, index) => {
                cy.wrap($ul).find('button').filter((_, el) => {
                    const text = Cypress.$(el).text();
                    return text.includes('Add More') || text.includes('Add');
                }).should('exist')
                    .and('be.visible')
                    .and('be.enabled')
                    .then(($button) => {
                        if ($button.text().includes('Add More')) {
                            addMoreCount++;
                            cy.log(`Button "Add More" found and clickable in ul #${index + 1}`);
                            return;
                        }
                        if ($button.text().includes('Add')) {
                            addCount++;
                            cy.log(`Button "Add" found and clickable in ul #${index + 1}`);
                            return;
                        }
                        testPassed = false;
                        cy.log(`Neither "Add More" nor "Add" button found in ul #${index + 1}`);
                    });
            }).then(() => {
                if (!testPassed) {
                    cy.log("Test case failed: One or more 'ul' elements do not contain a clickable 'Add More' or 'Add' button.");
                    return;
                }
                cy.log("Test case passed: All 'ul' elements contain a clickable 'Add More' or 'Add' button.");
                cy.log(`Count of 'Add More' buttons: ${addMoreCount}`);
                cy.log(`Count of 'Add' buttons: ${addCount}`);
            });
        });
    }

    setInputcategoryname(categoryname)
    {
        cy.get("input[placeholder='Ex Stationary']").type(categoryname).wait(3000);
    }

    Parentcategorysavebutton()
    {
        cy.get("button[type='submit'] span").wait(3000).click();
    }

    checkButtonStateOnSpace(categoryname) {
        cy.get("input[placeholder='Ex Stationary']").clear().type(categoryname).wait(3000);
        cy.get("button[type='submit']").then($button => {
            const isDisabled = $button.prop('disabled');

            if (categoryname.trim() === '') {
                if (!isDisabled) {
                    cy.log('Expected button to be disabled, but it was enabled.');
                }
                expect(isDisabled).to.be.true;
            } else {
                if (isDisabled) {
                    cy.log('Expected button to be enabled, but it was disabled.');
                }
                expect(isDisabled).to.be.false;
            }
        });
    }


    Addmore()
    {
        cy.get("body div[id='app'] div div[class='flex flex-col min-h-screen justify-between transition-all duration-200 px-4 sm:ml-64 pt-[72px] print:p-0 print:sm:ml-0 layout-main-container'] div[class='flex-1 mb-10'] div div div ul:nth-child(6) li:nth-child(1) div:nth-child(1) button:nth-child(1)").click().wait(3000);
    }

    setInputsubcategoryname(subcategoryname)
    {
        cy.get("input[placeholder='Ex Stationary']").type(subcategoryname).wait(3000);
    }

    setInputsubcategorycode(subcode)
    {
        cy.get("input[placeholder='ex. 1000']").type(subcode).wait(3000);
    }

    Submitbutton()//Sub category's submit button
    {
        cy.get("button[type='submit']").click()
    }

    // Expensecategorylist()
    // {
    //     cy.xpath("(//div)[34]").should('be.visible').then(parent =>
    //     {
    //         cy.wrap(parent).wait(5000).xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]//ul').then($ulElements =>
    //         {
    //             let ulContents = [];
    //             $ulElements.each((index, ul) =>
    //             {
    //                 let text = Cypress.$(ul).text().trim();
    //                 if (text !== 'Add More' && text !== 'Add') {
    //                     ulContents.push(text);
    //                 }
    //             });
    //
    //             cy.log(`UL Contents (Filtered): [${ulContents.join(' | ')}]`);
    //             cy.wrap(ulContents).as('ulContents');
    //         });
    //     });
    //     cy.get('@ulContents').then(ulContents =>
    //     {
    //         cy.log(`Retrieved UL Contents (Filtered): ${ulContents}`);
    //         ulContents.forEach((item, index) =>
    //         {
    //             cy.log(`Item ${index + 1}: ${item}`);
    //         });
    //     });
    // }


}
export default ExpanseCategoryPage;