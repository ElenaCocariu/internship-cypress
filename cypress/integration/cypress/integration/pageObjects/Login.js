
class Login{

   visit(){
        return cy.visit('http://live.demoguru99.com/index.php/customer/account/login/')
    }

    fillEmail(){
        return cy.get('#email')
    }
    fillPassword(){
        return cy.get('input[type="password"]')
    }
    fillLoginbutton(){
        return cy.get('#send2').contains('Login')
    }
}
export default Login