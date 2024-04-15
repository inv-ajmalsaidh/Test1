//Method2
class Login {

    userName = "input[placeholder='Username']";
    passWord = "input[placeholder='Password']";
    button = "button[type='submit']";
    verify = ".oxd-topbar-header-breadcrumb>.oxd-text";
    url = Cypress.env('URL1');

    OpenURL() {
        cy.visit(this.url)    //we are gloabaly configered the URL in the cypress.config,js file

    }

    setUsername(username) {
        cy.get(this.userName).type(username)
    }
    setPassword(password) {
        cy.get(this.passWord).type(password)
    }
    setSubmit() {
        cy.get(this.button).click()
    }
    verifyLogin() {
        cy.get(this.verify).should('have.text', 'Dashboard')
    }

}

export default Login;