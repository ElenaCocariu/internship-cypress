/// <reference types="cypress" />

describe('Check the "Register" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
  
     it('Registering a new customer account', () => {

        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get(':nth-child(5) > a').click()
        cy.get('#firstname').type('Madam').should('have.value','Madam')
        cy.get('#middlename').type('M').should('have.value','M')
        cy.get('#lastname').type('Popin').should('have.value','Popin')
        cy.get('#email_address').type('madampopinnnx@gmail.ro') .should('have.value', 'madampopinnnx@gmail.ro')
        cy.get('#password').type('123456789').should('have.value', '123456789')
        cy.get('#confirmation').type('123456789').should('have.value', '123456789')
        cy.get('#is_subscribed').click()
        cy.get('.buttons-set > .button').click()
        cy.get ('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span')
        .should('have.text', 'Thank you for registering with Main Website Store.')

   
       })

      it('Do not complete the required one field for creating an account', () => {

        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get(':nth-child(5) > a').click()
        cy.get('#firstname').type('Marta').should('have.value','Marta')
        cy.get('#lastname').type('Cojoc').should('have.value','Cojoc')
        cy.get('#email_address')
        cy.get('#password').type('123456789').should('have.value', '123456789')
        cy.get('#confirmation').type('123456789').should('have.value','123456789')
        cy.get('#is_subscribed').click()
        cy.get('.buttons-set > .button').click()
        cy.get('#advice-required-entry-email_address').should('have.text', 'This is a required field.')
        
       })

      })

  