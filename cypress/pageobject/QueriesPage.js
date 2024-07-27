class QueriesPage{

    Querissidebar()
    {
        cy.get('span.ml-3.text-sm.tracking-wide.truncate').contains('Queries').click();

    }

    Queriesdetails()
    {
        cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']")
            .as('btn').wait(3000).click();
    }

    Queriesverify()
    {
        cy.xpath("(//button[@type='button'])[4]")
            .as('btn').wait(3000).click();
    }

    Queriesverifyvoucher()
    {
        cy.get("button[class='focus:outline-none text-white bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg dark:bg-green-600 dark:focus:ring-green-800 hover:bg-green-800 dark:hover:bg-green-700 !rounded-full text-sm px-3 py-1.5 inline-flex items-center']")
            .as('btn').wait(3000).click();
    }

    Queriesvouchernumber()
    {
        // cy.get("span[class='cursor-pointer bg-[#EFF6FF] border border-[#BFDBFE] rounded-md p-1 font-semibold']").wait(3000)
        //     .then($el =>{
        //         const textContent = $el.text();
        //         cy.wrap(textContent).as('vouchernumber'); take the 1st 10 digit number
        //     });
        cy.get("span[class='cursor-pointer bg-[#EFF6FF] border border-[#BFDBFE] rounded-md p-1 font-semibold']")
            .wait(3000)
            .then($el => {
                const textContent = $el.text();
                const first10Digits = textContent.replace(/\D/g, '').slice(0, 10);
                cy.wrap(first10Digits).as('vouchernumber');
            });

    }

    Queriesvouchercursor() {
        cy.xpath("(//img[@class='cursor-pointer'])[1]").then($el => {
            if ($el.is(':visible')) {
                cy.wrap($el).click();
                return;
            }
        }).then(() => {
            cy.xpath("//body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/img[1]")
                .should('be.visible')
                .click()
                .wait(3000);
        });
    }


    Queriesverifyvouchernumber()
    {
        cy.get(".flex.w-full.justify-start.space-x-2").wait(3000)
            .then($el =>{
                const textContent = $el.text();
                const verifyvouchernumber = parseFloat(textContent.replace(/\D/g, ''));
                console.log(verifyvouchernumber);
                cy.wrap(verifyvouchernumber).as('verifythevouchernumber');

            })
    }

    Vouchermatches() {
        //this.Queriesvouchernumber();
        this.Queriesverifyvouchernumber();
        cy.get('@vouchernumber').then(voucherNumber => {
            cy.get('@verifythevouchernumber').then(verifyVoucherNumber => {
                expect(Number(voucherNumber)).to.equal(Number(verifyVoucherNumber));
            });
        });
    }

    Queriesvouchercreatedby() {
        cy.get('div[class="border border-gray-200 rounded-lg p-4 pl-8 text-gray-800 text-sm relative bg-[#BC500] h-full"]')
            .contains('Created By')
            .next()
            .invoke('text')
            .then((name) => {
                cy.wrap(name.trim()).as('createdByName'); // Store the name in an alias
            });

        cy.get('div[class="border border-gray-200 rounded-lg p-4 pl-8 text-gray-800 text-sm relative bg-[#BC500] h-full"]')
            .contains('Created By')
            .siblings('.text-gray-500')
            .invoke('text')
            .then((createdTime) => {
                cy.wrap(createdTime.trim()).as('createdTime');
            });
    }

    Noqueriesfoundyet() {
        cy.get(".w-full.flex.flex-col.justify-center.items-center.mt-10")
            .then($el => {
                const textContent = $el.text().trim();
                console.log(textContent);
                if (textContent.includes('No Queries')) {
                    cy.log('No Queries found, passing the test.');
                    return;
                }
                cy.wrap(textContent).as('No Queries');
                if (!textContent.includes('No Queries')){
                    qr.Queriesvouchercursor();
                    qr.Vouchermatches();
                    qr.Queriesvouchercreatedby();
                    gp.Navigatetoback();
                    qr.Queriesverify();
                    qr.Queriesverifyvoucher();
                }
            });
    }



}
export default QueriesPage;