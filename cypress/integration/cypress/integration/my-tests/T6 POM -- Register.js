
import Register from '../pageObjects/Register'


describe('register', () => {
    const register = new Register()

    it('Register',() => {

        cy.visit('http://live.demoguru99.com/index.php/customer/account/create/')
        register.fillFirstname().type('Mihaela')
        register.fillMiddlename().type('M')
        register.fillLastname().type('Barba')
        register.fillEmail().type('mihaelabarba@gmail.com')
        register.fillPassword().type('123456789')
        register.fillConfirmation().type('123456789')
        register.fillRegisterbutton().should('be.visible').click()
    })
})

