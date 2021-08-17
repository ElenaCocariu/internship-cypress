/// <reference types="cypress" />

describe('Validation of the "Register" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
    it('Create an account with invalid data', () => {
      cy.get('body div.header-language-background p')
      cy.get('.skip-account').click().scrollIntoView()
      cy.wait(1500)
      cy.get(':nth-child(5) > a').click()
      cy.wait(1500)
      cy.get('#firstname').type('7889458975','{delay:1000}')
      .should('have.value','7889458975')
      cy.wait(1500)
      cy.get('#middlename').type('C')
      cy.wait(1500)
      cy.get('#lastname').type('poi965842358', '{delay:2000}')
      .should('have.value','poi965842358')
      cy.wait(1500)
      cy.get('#email_address').type('5478690dcscs@red.div','{delay:2000}')
      .should('have.value', '5478690dcscs@red.div')
      cy.wait(1500)
      cy.get('#password').type('dgdfhdfhbfd5465468', '{delay:2000}')
      .should('have.value', 'dgdfhdfhbfd5465468')
      cy.wait(1500)
      cy.get('#confirmation').type('dgdfhdfhbfd5465468', '{delay:2000}')
      .should('have.value', 'dgdfhdfhbfd5465468')
      cy.wait(1500)
      cy.get('#is_subscribed').click()
      cy.wait(1500)
      cy.get('.buttons-set > .button').click()
      cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li:nth-child(1)').should('have.text','"Email" is not a valid hostname.')
      
 
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