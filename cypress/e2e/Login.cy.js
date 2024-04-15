
//import Login from "../PageObjec2/LoginPage"; //import login pageobject
import Login from "../PageObjec2/LoginPage2";
const ln = new Login() //object creation

describe("POM2", () => {
    let textdata; //initailizing

    before(function () {

        ln.OpenURL()

        cy.fixture('Login.json').then(function (data) {

            textdata = data; //test data decalearing
        })
    })
    it("Login success", () => { //successfull login
        ln.setUsername(textdata.username)
        ln.setPassword(textdata.password)
        ln.setSubmit()
        ln.verifyLogin()

    })

})