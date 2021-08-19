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
        cy.wait(3000)
        cy.get(':nth-child(3) > .col2-set > .col-1 > .box > .box-title > a').click()
        cy.get('#firstname').click()
        cy.get('#firstname').clear()
        cy.get('#firstname').click().type('Madam Seva').should('have.value', 'Madam Seva')
        cy.wait(3000)
        cy.get('#lastname').click()
        cy.get('#lastname').clear()
        cy.get('#lastname').click().type('Lascu').should('have.value', 'Lascu')
        cy.get('#current_password').type('123456789').should('have.value', '123456789')
        cy.get('.buttons-set > .button').click()
        cy.get('.success-msg > ul > li').should('have.text', 'The account information has been saved.')

    })


   it('Testing for adding a new address', () => {
    cy.get('.skip-account').click().scrollIntoView()
    cy.get('#header-account > .links > ul > .first > a').should('have.text', 'My Account').click()
    cy.get('#email').type('madampopin@gmail.ro').should('have.value','madampopin@gmail.ro')
    cy.get('#pass').type('123456789').should('have.value','123456789')
    cy.get('#send2').should('have.text','Login').click()
    cy.get('h1').should('have.text','My Dashboard')
    cy.wait(3000)
    cy.get('.block-content > ul > :nth-child(3) > a').click()
    cy.get('.page-title > .button > :nth-child(1) > span').click()
    cy.get('#telephone').type('0743897540').should('have.value', '0743897540')
    cy.get('#street_1').type('Strada Carpu, nr 5, Judetul BC').should('have.value', 'Strada Carpu, nr 5, Judetul BC')
    cy.get('#city').click().type('Bacău').should('have.value','Bacău')
    cy.get('#country').select('Romania').should('have.value','RO')
    cy.get('#region_id').select('Bacău').should('have.value','281')
    cy.get('#zip').type('569874').should('have.value', '569874')
    cy.get('#primary_billing').click().should('have.value','1')
    cy.get('#primary_shipping').click().should('have.value','1')
    cy.get('.buttons-set > .button').click()
    cy.get('.success-msg > ul > li').should('have.text', 'The address has been saved.')

    })



    it('Testing for wishlist', () => {
      cy.get('body div.header-language-background p')
      cy.get('.skip-account').click()
      cy.get('#header-account > .links > ul > .last > a').click()
      cy.get('#email').type('mihaelabarba@gmail.com').should('have.value','mihaelabarba@gmail.com' )
      cy.get('#pass').type('123456789').should('have.value','123456789')
      cy.get('#send2 > :nth-child(1) > span').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1')
      .should('have.text', 'My Dashboard')
      cy.get('.nav-1 > .level0').click().should('have.text', 'Mobile')
      cy.get(':nth-child(1) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click()
      cy.get('.success-msg > ul > li > span').should('have.text', 'Samsung Galaxy has been added to your wishlist. Click here to continue shopping.')
      cy.get('.success-msg > ul > li > span > a').should('have.attr', 'href')
      cy.get('.nav-2 > .level0').click().should('have.text', 'TV')
      cy.get(':nth-child(1) > .product-info > .actions > .add-to-links > :nth-child(1) > .link-wishlist').click() 
      cy.get('.success-msg > ul > li').should('have.text', 'LG LCD has been added to your wishlist. Click here to continue shopping.')
      cy.get('.success-msg > ul > li > span > a').should('have.attr', 'href')
      cy.get('tbody>tr > .wishlist-cell1 > .product-name > a').eq(0).should('exist')
      cy.get('tbody>tr > .wishlist-cell5 > .btn-remove').eq(0).should('have.text','Remove item').click()
    
     })

})