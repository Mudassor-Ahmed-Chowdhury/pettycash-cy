import LoginPage from "./LoginPage";

class GlobalPage {
    constructor() {
        this.ln = new LoginPage();
    }

    Navigatetoback() {
        cy.go('back');
    }

    Stmuser()
    {
        this.ln.setEmail("stm@pc.com");
        this.ln.setPassword("password");
        this.ln.Loginbutton();
        this.ln.VerifyLogin();
    }

    Jtmuser()
    {
        this.ln.setEmail("jtm@pc.com");
        this.ln.setPassword("password");
        this.ln.Loginbutton();
        this.ln.VerifyLogin();
    }

    Adminuser()
    {
        this.ln.setEmail("admin@pc.com");
        this.ln.setPassword("password");
        this.ln.Loginbutton();
        this.ln.VerifyLogin();
    }

    Manageruser()
    {
        this.ln.setEmail("manager@pc.com");
        this.ln.setPassword("password");
        this.ln.Loginbutton();
        this.ln.VerifyLogin();
    }

    Accountant()
    {
        this.ln.setEmail("accountant@pc.com");
        this.ln.setPassword("password");
        this.ln.Loginbutton();
        this.ln.VerifyLogin();
    }

    Globalsidebarfullbox()
    {
        cy.xpath("/html[1]/body[1]/div[1]/div[1]/aside[1]/div[1]").wait(3000).click()
    }


    checkIframe() {
        return cy.xpath("//body//div//iframe").then(($iframe) => {
            if ($iframe.length === 0) {
                cy.log('Iframe is not present, continuing the test...');
                return null; // Return null if iframe not found
            }
            return $iframe; // Return iframe if found
        });
    }

    iframeLocatorFunction() {
        return this.checkIframe().then($iframe => {
            if ($iframe === null) {
                cy.log('Iframe not found, test case successful');
                return this;
            }

            throw new Error('Iframe was found, which is unexpected.');
        });
    }



}

export default GlobalPage;
