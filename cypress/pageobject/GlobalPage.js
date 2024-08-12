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
}

export default GlobalPage;
