class Bills
{
  Sidebarbills()
  {
      cy.xpath("/html[1]/body[1]/div[1]/div[1]/aside[1]/div[1]/ul[1]/li[3]/a[1]" )
          .wait(3000).click();
  }
  Addnew()
  {
      cy.xpath("(//button[@class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center'])[1]")
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
      cy.get("button[class='text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg dark:bg-blue-600 focus:outline-none dark:focus:ring-blue-800 hover:bg-blue-800 dark:hover:bg-blue-700 !rounded-full text-sm px-4 py-2 inline-flex items-center']")
          .click();
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

  Select_voucher() {
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
}
export default Bills;
