/// <reference types="cypress" />

describe('Validation of the "Register" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Create an account with successfully', () => {
      cy.get('body div.header-language-background p')
      cy.get('.skip-account').click().scrollIntoView()
      cy.wait(1500)
      cy.get(':nth-child(5) > a').click()
      cy.wait(1500)
      cy.get('#firstname').type('Carmend','{delay:1000}')
      .should('have.value','Carmend')
      cy.wait(1500)
      cy.get('#middlename').type('C')
      cy.wait(1500)
      cy.get('#lastname').type('Olarud', '{delay:2000}')
      .should('have.value','Olarud')
      cy.wait(1500)
      cy.get('#email_address').type('carmenolarud@red.ro','{delay:2000}')
      .should('have.value', 'carmenolarud@red.ro')
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
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text','Thank you for registering with Main Website Store.')
      
 
     })



    it('There is already an account with this email address', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.wait(1500)
        cy.get(':nth-child(5) > a').click()
        cy.wait(1500)
        cy.get('#firstname').type('Adriana','{delay:1000}')
        .should('have.value','Adriana')
        cy.wait(1500)
        cy.get('#middlename').type('A')
        cy.wait(1500)
        cy.get('#lastname').type('Case', '{delay:2000}')
        .should('have.value','Case')
        cy.wait(1500)
        cy.get('#email_address').type('adrianacase@red.ro','{delay:2000}')
        .should('have.value', 'adrianacase@red.ro')
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
        cy.contains('There is already an account with this email address.')
   
       })

    
})