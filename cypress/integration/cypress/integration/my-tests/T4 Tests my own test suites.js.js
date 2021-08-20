/// <reference types="cypress" />

describe('Tests my own test suites', () => {
    beforeEach(() => {
  
      cy.visit('http://automationpractice.com/index.php')
  
    })



    it('Check if your shopping cart is empty.', () => {
        cy.get('[title="View my shopping cart"]').click()
        cy.get('.alert').should('have.text','Your shopping cart is empty.')



    })



    it('Verify if you can add one item in the wishlist unlogged.', () => {
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('.addToWishlist').click()
        cy.get('.fancybox-error').should('exist')
        cy.get('.fancybox-error').should('have.text','You must be logged in to manage your wishlist.')

    })

    it('Check how many items you can compare', () => {

        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.block_content > .tree > :nth-child(1) > a').click()
        cy.get('.add_to_compare').should('have.text', 'Add to Compare')
        cy.get('.add_to_compare').click()
        cy.get('.bottom-pagination-content > .compare-form > .btn > span').click()
        cy.get('#center_column > h1').should('have.text','Product Comparison')
        cy.get('.button-container > .lnk_view > span').click()
        cy.get('.sf-menu > :nth-child(3) > a').click()
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
        cy.get('.last-in-line > .product-container > .functional-buttons > .compare > .add_to_compare').click()
        cy.get('.last-in-line > .product-container > .functional-buttons > .compare').click()
        cy.get('.last-line.first-item-of-tablet-line > .product-container > .functional-buttons > .compare > .add_to_compare').click()
        cy.get('.fancybox-error').should('have.text','You cannot add more than 3 product(s) to the product comparison')

        




    })


})