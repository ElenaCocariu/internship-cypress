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
        cy.get('#firstname').type('Madam','{delay:1000}')
        .should('have.value','Madam')
        cy.wait(1500)
        cy.get('#middlename').type('M')
        cy.wait(1500)
        cy.get('#lastname').type('Popin', '{delay:2000}')
        .should('have.value','Popin')
        cy.wait(1500)
        cy.get('#email_address').type('madampopin@gmail.ro','{delay:2000}')
        .should('have.value', 'madampopin@gmail.ro')
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
        cy.get ('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > ul > li > ul > li > span').should('have.text', 'Thank you for registering with Main Website Store.')

   
       })

       it('Do not complete required fields for create an account', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.wait(1500)
        cy.get(':nth-child(5) > a').click()
        cy.wait(1500)
        cy.get('#firstname').type('Marta','{delay:1000}')
        .should('have.value','Marta')
        cy.wait(1500)
        cy.get('#middlename')
        cy.wait(1500)
        cy.get('#lastname').type('Cojoc', '{delay:2000}')
        .should('have.value','Cojoc')
        cy.wait(1500)
        cy.get('#email_address').type('martacojoccc@gmail.com','{delay:2000}')
        .should('have.value', 'martacojoccc@gmail.com')
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





      })

  