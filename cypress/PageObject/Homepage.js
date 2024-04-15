//export command

class Homepage {
    userName = "div[class='form-group'] input[name='name']";
    passWord = "#exampleInputPassword1";
    email = "input[name='email']";
    Verify = ".ng-untouched";
    gender = "#exampleFormControlSelect1";
    check1 = "#exampleCheck1";
    check2 = "#inlineRadio2";
    check3 = "#inlineRadio3";
    dob = "input[name='bday']";
    verify1 = ".alert.alert-success.alert-dismissible";
    submit = "input[type='submit']";


    OpenURL() {

        cy.visit(Cypress.env('URL2'))   //we are gloabaly configered the URL in the cypress.config,js file

    }

    getName() {

        return cy.get(this.userName)
    }
    getTwowaydatabinding() {

        return cy.get(this.Verify)
    } s
    getGender() {
        return cy.get(this.gender)
    }
    getEmail() {

        return cy.get(this.email)
    }

    getPassword() {
        return cy.get(this.passWord)

    }
    getCheck1() {
        return cy.get(this.check1)
    }
    getCheck2() {
        return cy.get(this.check2)
    }
    getDOB() {

        return cy.get(this.dob)
    }
    getCheck3() {
        return cy.get(this.check3)
    }

    getSubmit() {
        return cy.get(this.submit)
    }

    getVerifyLogin() {
        return cy.get(this.verify1)
    }
}

export default Homepage;


