class Productpage {
    OpenURL() {

        cy.visit(Cypress.env('URL'))   //we are gloabaly configered the URL in the cypress.config,js file

    }

    getpage() {

        return cy.get(':nth-child(2)>.nav-link')

    }

    getCart() {

        return cy.get(".nav-link.btn.btn-primary")
    }
    getCheckout() {

        return cy.contains('Checkout')
    }
    getCountry() {
        return cy.get('#country')
    }
    getSuggetion() {
        return cy.get('.suggestions > ul > li > a')
    }
    getCheckbox4() {
        return cy.get("label[for='checkbox2']")
    }
    GetPurchase() {
        return cy.get("input[value='Purchase']")
    }
    getAlert() {
        return cy.get('.alert')
    }


}

export default Productpage;