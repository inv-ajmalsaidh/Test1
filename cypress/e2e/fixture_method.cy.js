/// <reference types="Cypress" />

import Homepage from "../PageObject/Homepage"
import Productpage from "../PageObject/ProductPage"
const homePage = new Homepage()
const productPage = new Productpage()

describe("POM", () => {
    let textdata; //initilized the testdata

    before(function () {
        homePage.OpenURL()

        cy.fixture('example.json').then(function (data) {
            textdata = data;
        })

    })

    it('HomePage', () => {
        // Cypress.config('defaultCommandTimeout',8000) //for specific file timeout

        homePage.getName().type(textdata.name)
        homePage.getEmail().type(textdata.email)
        homePage.getPassword().type(textdata.password)
        homePage.getCheck1().check()
        homePage.getGender().select(textdata.gender)
        homePage.getCheck2().check()
        homePage.getDOB().type(textdata.dob)
        homePage.getName().should('have.value', textdata.name)
        homePage.getCheck3().should('be.disabled')
        homePage.getSubmit().click()
        homePage.getVerifyLogin().should('contain', textdata.response)


    })


    it('ProductPage', () => {
        productPage.OpenURL()
        productPage.getpage().click()

        textdata.productName.forEach(function (element) {
            cy.selectProdcut(element)

        })

        productPage.getCart().click()
        productPage.getCheckout().click()
        productPage.getCountry().type(textdata.country)
        Cypress.config('defaultCommandTimeout', 8000) //for specific file default config time 
        productPage.getSuggetion().click()
        productPage.getCheckbox4().click({ force: true })
        productPage.GetPurchase().click()
        //Assertion
        productPage.getAlert().then(function (element) {

            const acttext = element.text()
            expect(acttext.includes("Success!")).to.be.true

        })


    })

})