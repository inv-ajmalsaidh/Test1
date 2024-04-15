//Method1
class Login {
    OpenURL() {
        cy.visit(Cypress.env('URL1'))    //we are gloabaly configered the URL in the cypress.config,js file

    }

    setUsername(username) {
        cy.get("input[placeholder='Username']").type(username)
    }
    setPassword(password) {
        cy.get("input[placeholder='Password']").type(password)
    }
    setSubmit() {
        cy.get("button[type='submit']").click()
    }
    verifyLogin() {
        cy.get(".oxd-topbar-header-breadcrumb>.oxd-text").should('have.text', 'Dashboard')
    }

}

export default Login;