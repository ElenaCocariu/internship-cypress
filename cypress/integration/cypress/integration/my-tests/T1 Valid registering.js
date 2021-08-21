/// <reference types="cypress" />

describe('Validation of the "Register" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })
  
     it('Create an account with all invalid data', () => {
      cy.get('body div.header-language-background p')
      cy.get('.skip-account').click().scrollIntoView()
      cy.get(':nth-child(5) > a').click()
      cy.get('#firstname').type('7889458975').should('have.value','7889458975')
      cy.get('#middlename').type('C').should('have.value','C')
      cy.get('#lastname').type('poi965842358').should('have.value','poi965842358')
      cy.get('#email_address').type('5478690dcscs@red.div').should('have.value', '5478690dcscs@red.div')
      cy.get('#password').type('dgdfhdfhbfd5465468').should('have.value', 'dgdfhdfhbfd5465468')
      cy.get('#confirmation').type('dgdfhdfhbfd5465468').should('have.value', 'dgdfhdfhbfd5465468')
      cy.get('#is_subscribed').click()
      cy.get('.buttons-set > .button').click()
      cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li:nth-child(1)')
      .should('have.text','"Email" is not a valid hostname.')
      
     })



    it('There is already an account with this email address', () => {
        cy.get('body div.header-language-background p')
        cy.get('.skip-account').click().scrollIntoView()
        cy.get(':nth-child(5) > a').click()
        cy.get('#firstname').type('Adriana').should('have.value','Adriana')
        cy.get('#middlename').type('A').should('have.value','A')
        cy.get('#lastname').type('Case').should('have.value','Case')
        cy.get('#email_address').type('adrianacase@red.ro').should('have.value', 'adrianacase@red.ro')
        cy.get('#password').type('123456789').should('have.value', '123456789')
        cy.get('#confirmation').type('123456789').should('have.value', '123456789')
        cy.get('#is_subscribed').click()
        cy.get('.buttons-set > .button').click()
        cy.get('.error-msg > ul > li')
        .should('have.text', 'There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
        cy.get('.error-msg > ul > li > span > a').should('have.attr', 'href')

       })

    
})