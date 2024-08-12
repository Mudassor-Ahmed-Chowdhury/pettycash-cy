class Bills
{
  Sidebarbills()
  {
      cy.xpath("/html[1]/body[1]/div[1]/div[1]/aside[1]/div[1]/ul[1]/li[3]/a[1]" )
          .wait(3000).click();
  }
  Addnew()//Create Bill
  {
      cy.xpath("(//span[normalize-space()='Create Bill'])[1]")
          .wait(3000).click();
  }

  UserLogo()
  {
      cy.xpath("//button[@class='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150'])[1]")
          .wait(3000).click();
  }

  Verifyusername()
  {
      cy.xpath("//h3[normalize-space()='Admin'])[1]")
          .should('have.text','Admin');
  }

  Chosebilldate()
  {
      cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/input[1]")
          .wait(3000).click();
  }

  Activedate()
  {
      cy.get(".dp__cell_inner.dp__pointer.dp__today.dp__active_date")
          .wait(3000).click();
  }

  Select_items()
  {
      cy.get(".flex.justify-between.items-center.border.border-gray-300.p-2.rounded-md.cursor-pointer").wait(3000).click();
  }

  Select_office_equipment()
  {
      cy.xpath("(//input[@type='checkbox'])[1]").wait(3000).click();
  }

  setMonitor(monitor)
  {
      cy.xpath("(//input[@placeholder='10'])[1]").wait(3000).click().clear().type(monitor);
  }

  setPcaccesories(pcaccesories)
  {
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)")
          .wait(3000).click().clear().type(pcaccesories);
  }

  setDeskchair(deskchair)
  {
      cy.get("div:nth-child(4) div:nth-child(3) div:nth-child(1) div:nth-child(1) input:nth-child(1)")
          .wait(3000).click().clear().type(deskchair);
  }
  setPaidamount(paidamount)
  {
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(2)")
          .wait(3000).click().clear().type(paidamount);
  }
  Ammounterror()
  {
      cy.get(".text-red-500.text-xs").wait(3000);
  }
  Createbutton()
  {
      cy.get("(//span[normalize-space()='Create'])[1]")
          .then($el =>{
              cy.wrap($el).as('btn').click();
      })
  }
  Billsamount()
  {
      cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)")
          .invoke('text');
  }

  Billscreatedsuccessfull()
  {
      cy.xpath("//p[@class='v-toast__text']")
          .should('have.text', 'Bill created successfully');
  }

  Select_voucher()
  {
        cy.get("select[class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg']")
            .then($select => {
                const options = $select.find('option')
                    .filter((index, option) => !option.disabled);
                if (options.length === 0) {
                    cy.log('No selectable options available');
                    return;
                }
                const randomIndex = Math.floor(Math.random() * options.length);
                const randomOption = options[randomIndex].value;
                cy.wrap($select).select(randomOption);
                cy.log(`Random option selected is ${options[randomIndex].innerText}`);
            });
    }

    Billlistmatcheswithexpenselist()
    {
        this.FetchexpensecategoryLists();
        this.CheckExpenseList();

        cy.get('@listItems').then(listItems => {
            cy.log(`List Items Length: ${listItems.length}`);
            cy.log(`List Items: ${JSON.stringify(listItems)}`);
        });

        cy.get('@ulContents').then(ulContents => {
            cy.log(`UL Contents Length: ${ulContents.length}`);
            cy.log(`UL Contents: ${JSON.stringify(ulContents)}`);
        });

        cy.get('@listItems').then(listItems => {
            cy.get('@ulContents').then(ulContents => {
                cy.log(`Comparing List Items: ${listItems} with UL Contents: ${ulContents}`);
                expect(listItems).to.deep.equal(ulContents);
            });
        });
    }

   CheckExpenseList()
   {
    cy.get("div[class='absolute top-full left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10'] div:nth-child(2)")
        .should('be.visible')
        .then($container => {
            cy.wrap($container).xpath("//ul[@class='treeview']")
                .find('li')
                .then($liElements => {
                    let liTexts = [];
                    $liElements.each((index, li) => {
                        liTexts.push(Cypress.$(li).text().trim());
                    });
                    cy.log(`List Items: [${liTexts.join(', ')}]`);
                    cy.wrap(liTexts).as('listItems'); // Store list items in alias
                });
        });
}

    FetchexpensecategoryLists()
    {
        const expenseCategoriesUrl = 'http://sutaay.com/expense-categories';
        cy.request('GET', expenseCategoriesUrl).then(response => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(response.body, 'text/html');
            const ulContents = [...doc.querySelectorAll('ul.treeview li')]
                .map(li => li.textContent.trim());
            cy.wrap(ulContents).as('ulContents');
            cy.log(`Captured UL Contents: ${ulContents}`);
        });
    }
    Billsbackgroudbesidecreatebill()
    {
        cy.get(".flex.justify-between.space-x-4.items-center.mb-8").click()
    }

}
export default Bills;
