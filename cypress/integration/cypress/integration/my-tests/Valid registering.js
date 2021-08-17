/// <reference types="cypress" />

describe('Validation of the "Register" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Validation with corect credentials', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.wait(1500)
        cy.get(':nth-child(5) > a').click()
        cy.wait(1500)
        cy.get('#firstname').type('Mihaela','{delay:1000}')
        .should('have.value','Mihaela')
        cy.wait(1500)
        cy.get('#middlename').type('M')
        cy.wait(1500)
        cy.get('#lastname').type('Barba', '{delay:2000}')
        .should('have.value','Barba')
        cy.wait(1500)
        cy.get('#email_address').type('mihaelabarba@gmail.com','{delay:2000}')
        .should('have.value', 'mihaelabarba@gmail.com')
        cy.wait(1500)
        cy.get('#password').type('123456789', '{delay:2000}')
        .should('have.value', '123456789')
        cy.wait(1500)
        cy.get('#confirmation').type('123456789', '{delay:2000}')
        .should('have.value', '123456789')
        cy.wait(1500)
        cy.get('#is_subscribed').click()
        cy.wait(1500)
        cy.get('.buttons-set > .button').click()
        cy.contains('There is already an account with this email address. If you are sure that it is your email address, click here  to get your password and access your account.')
   
       })

})