/// <reference types="cypress" />

describe('Tests for registered customers', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })

    it('Testing for updating account information', () => {
        cy.get('.skip-account').click().scrollIntoView()
        cy.get('#header-account > .links > ul > .first > a').should('have.text', 'My Account').click()
        cy.get('#email').type('madampopin@gmail.ro').should('have.value','madampopin@gmail.ro')
        cy.get('#pass').type('123456789').should('have.value','123456789')
        cy.get('#send2').should('have.text','Login').click()
        cy.get('h1').should('have.text','My Dashboard')
        

       
       

        
        






    })






})