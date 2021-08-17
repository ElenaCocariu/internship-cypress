/// <reference types="cypress" />

describe('Check the "Register" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Welcome to "Create an account" page', () => {
     cy.get('body div.header-language-background p')
     cy.get('.skip-account').click().scrollIntoView()
     cy.wait(3000)
     cy.get(':nth-child(5) > a').click()
     cy.get('h1')
        
    })

    it('Registering a new customer account', () => {
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
   
       })

       it('Do not complete required fields for create an account', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.wait(1500)
        cy.get(':nth-child(5) > a').click()
        cy.wait(1500)
        cy.get('#firstname').type('Mihaelaaa','{delay:1000}')
        .should('have.value','Mihaelaaa')
        cy.wait(1500)
        cy.get('#middlename')
        cy.wait(1500)
        cy.get('#lastname').type('Barbaaa', '{delay:2000}')
        .should('have.value','Barbaaa')
        cy.wait(1500)
        cy.get('#email_address').type('mihaelabarbaa@gmail.com','{delay:2000}')
        .should('have.value', 'mihaelabarbaa@gmail.com')
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
   
       })





      })

  