/// <reference types="cypress" />

describe('Login ', () => {
    it('Sign in',() => {

    cy.visit('http://live.demoguru99.com/index.php/customer/account/login/')
    cy.get('#email').type('mihaelabarba@gmail.com')
    cy.get('input[type="password"]').type('123456789')
    cy.get('#send2').contains('Login').should('be.visible').click()

    })


describe('Register',() =>{
    it('Register', () =>{
       
        cy.visit('http://live.demoguru99.com/index.php/customer/account/create/')
        cy.get('#firstname').type('mihaelabarba@gmail.com')
        cy.get('#middlename').type('M')
        cy.get('#lastname').type('Barba')
        cy.get('#email_address').type('mihaelabarba@gmail.com')
        cy.get('#password').type('123456789')
        cy.get('#confirmation').type('123456789')
        cy.get('.buttons-set > .button').contains('Register').should('be.visible').click()

    })

})



})