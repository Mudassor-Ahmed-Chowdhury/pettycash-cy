class UserPage{
    Userpagesidebar()
    {
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/aside[1]/div[1]/ul[1]/li[7]/a[1]")
            .click().wait(3000);
    }

    Adduser()
    {
        cy.xpath("//span[normalize-space()='Add User']").as('btn').click().wait(3000);
    }

    Firstnamefield(firstnamefield)
    {
        const firstNameLocator = "//input[@placeholder='Tamim']";
        cy.xpath(firstNameLocator).clear();
        cy.xpath(firstNameLocator).click().wait(3000).type(firstnamefield);
        cy.xpath(firstNameLocator).should('not.have.value', /[^a-zA-Z\s]/);
        cy.xpath(firstNameLocator).clear().wait(3000).type('1234');
        cy.xpath(firstNameLocator).should('not.have.value', /\d/);
        cy.xpath(firstNameLocator).clear().wait(3000).type('John Doe');
        cy.xpath(firstNameLocator).should('have.value', 'John Doe');

    }

    Secondnamefield(secondnamefield)
    {
        const secondNameLocator = "//input[@placeholder='Iqbal']";
        cy.xpath(secondNameLocator).clear();
        cy.xpath(secondNameLocator).click().wait(3000).type(secondnamefield);
        cy.xpath(secondNameLocator).should('not.have.value', /[^a-zA-Z\s]/);
        cy.xpath(secondNameLocator).clear().wait(3000).type('1234');
        cy.xpath(secondNameLocator).should('not.have.value', /\d/);
        cy.xpath(secondNameLocator).clear().wait(3000).type('John Doe');
        cy.xpath(secondNameLocator).should('have.value', 'John Doe');

    }

    setContactNumber(phoneNumber)
    {
        cy.xpath("//input[@placeholder='01773672876']").click().wait(3000).clear().type(phoneNumber);
    }

    Contactnumbernotvalid()
    {
        cy.xpath("(//p[@class='text-red-600 absolute text-xs my-2'])[1]").should('be.visible');
    }

    Validatecontactnumber(phoneNumber)
    {
        this.setContactNumber(phoneNumber);

        const validPrefixes = ['017', '013', '014', '015', '018', '019', '016'];
        const isValid = phoneNumber.length === 11 && validPrefixes.includes(phoneNumber.substring(0, 3));

        if (!isValid) {
            this.Contactnumbernotvalid();
        }
    }



    setEmailAndVerifyErrors(email)
    {
        const invalidEmails = [
            { email: 'invalidemail.com', message: 'Enter a valid email!' },
            { email: 'user@.com', message: 'Enter a valid email!' },
            { email: 'user@domain', message: 'Enter a valid email!' },
            { email: 'user@domain!com', message: 'Enter a valid email!' },
            { email: '', message: 'Enter a valid email!' },
            { email: 'user@@domain.com', message: 'Enter a valid email!' },
            { email: 'user @domain.com', message: 'Enter a valid email!' },
            { email: 'user@domain.c', message: 'Enter a valid email!' }
        ];

        invalidEmails.forEach(({ email, message }) => {
            cy.xpath("//input[@placeholder='abc@example.com']")
                .should('be.visible')
                .clear()
                .type(email)
            cy.xpath('(//p[@class=\'absolute text-red-600 text-xs my-2\'])[1]')
                .and('contain', message);
        });

    }

    setAddress(address)
    {
        cy.xpath("//textarea[@placeholder='Write your address...']").wait(3000).type(address);
    }

    setPassword(password)
    {
        cy.xpath("//div[@class='flex justify-start items-center space-x-5 mb-5 col-span-2']//div[1]//div[1]//div[1]//div[1]//input[1]").wait(3000).type(password);
    }

    setConfirmationpassword(confirmpassword)
    {
        cy.xpath("//div[@class='flex justify-start items-center space-x-5 mb-5 col-span-2']//div[2]//div[1]//div[1]//div[1]//input[1]").wait(3000).type(confirmpassword)
    }

    Setuserrole()
    {
        const dropdownLocator = "(//select[@class='w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 p-2.5 text-sm border border-gray-300 rounded-lg'])[1]";
        cy.xpath(dropdownLocator)
            .children('option')
            .then(($options) => {
                const randomIndex = Math.floor(Math.random() * $options.length);
                const randomValue = $options[randomIndex].value;
                cy.xpath(dropdownLocator).select(randomValue);
            });
    }

    Invaliduserdata()
    {
        cy.xpath("//input[@placeholder='Tamim']").click().clear().type('Jhon');
        cy.xpath("//input[@placeholder='Iqbal']").click().clear().type("Ibrahim");
        cy.xpath("//input[@placeholder='abc@example.com']").click().clear().type("user@.com"); //Invalid Email
        cy.xpath("//div[@class='flex justify-start items-center space-x-5 mb-5 col-span-2']//div[1]//div[1]//div[1]//div[1]//input[1]").click().clear().type("password");
        cy.xpath("//div[@class='flex justify-start items-center space-x-5 mb-5 col-span-2']//div[2]//div[1]//div[1]//div[1]//input[1]").click().clear().type("password");
        this.Setuserrole();
        this.Savebutton();
        cy.xpath("//div[@class='v-toast v-toast--top']").should('not.exist'); // Toast xpth should not visible
    }

    Invalidedituserdata()
    {
        cy.xpath("//input[@placeholder='First Name']").click().clear().type('Jhon');
        cy.xpath("(//input[@placeholder='Iqbql'])[1]").click().clear().type("Ibrahim");
        cy.xpath("//input[@placeholder='abc@example.com']").click().clear().type("user@.com"); //Invalid Email
        this.Savebutton();
        cy.xpath("//div[@class='v-toast v-toast--top']").should('not.exist');
    }

    Editfirstnamefield(editfirstnamefield)
    {
        const editfirstNameLocator = "//input[@placeholder='First Name']";
        cy.xpath(editfirstNameLocator).clear();
        cy.xpath(editfirstNameLocator).click().wait(3000).type(editfirstnamefield);
        cy.xpath(editfirstNameLocator).should('not.have.value', /[^a-zA-Z\s]/);
        cy.xpath(editfirstNameLocator).clear().wait(3000).type('1234');
        cy.xpath(editfirstNameLocator).should('not.have.value', /\d/);
        cy.xpath(editfirstNameLocator).clear().wait(3000).type('John Doe');
        cy.xpath(editfirstNameLocator).should('have.value', 'John Doe');

    }

    Savebutton()
    {
        cy.xpath("//span[normalize-space()='Save']").click().wait(2000);
    }

    clickEditiconfirstrow()
    {
        cy.xpath("//tbody/tr[1]/td[7]/div[1]/div[1]/button[1]").as('btn').click();
    }

}
export default UserPage;