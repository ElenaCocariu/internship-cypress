

import Login from '../pageObjects/Login'

describe('login', () => {
    const login = new Login()

    it('Sign in',() => {

    cy.visit('http://live.demoguru99.com/index.php/customer/account/login/')
    login.fillEmail().type('mihaelabarba@gmail.com')
    login.fillPassword().type('123456789')
    login.fillLoginbutton().should('be.visible').click()

    })
})