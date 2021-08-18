/// <reference types="cypress" />

describe('Tests for unregistered customers', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })

    it('Searching an item on the page', () => {
      cy.get('#search').click()
      .type('Samsung LCD').should('have.value','Samsung LCD')
      cy.wait(3000)
      cy.get('.input-box > .button').click()
      cy.get('body > div > div > div.main-container.col3-layout > div > div.col-wrapper > div.col-main > div.category-products > ul > li:nth-child(1) > div > h2 > a')
      .should('have.text', 'Samsung LCD') 

       })
     
  
    it('Testing to add an item to the cart', () => {
      cy.get('#search').click()
      .type('Mobile').should('have.value', 'Mobile')
      cy.get('.input-box > .button').click()
      cy.get('.product-info > .actions > .button > :nth-child(1) > span').should('have.text','Add to Cart').click()
      cy.get('.success-msg > ul > li').should('have.text','IPhone was added to your shopping cart.')
  
         })

         
    it('Testing to finalize a purchase', () => {
      cy.get('#search').click()
      .type('TV').should('have.value', 'TV')
      cy.get('.input-box > .button').click()
      cy.get(':nth-child(2) > .product-info > .actions > .button > :nth-child(1) > span').click()
      cy.wait(3000)
      cy.get('body > div > div > div.main-container.col1-layout > div > div > div > ul > li > ul > li')
     .should('have.text', 'LG LCD was added to your shopping cart.')
      cy.get('.method-checkout-cart-methods-onepage-bottom > .button').click()
      cy.wait(3000)
      cy.get('#checkout-step-login > div > div.col-1 > ul > li:nth-child(1) > label')
     .should('have.text','Checkout as Guest').click()
      cy.get('#onepage-guest-register-button > :nth-child(1) > span').click()
      cy.get('body > div > div > div.main-container.col2-right-layout > div > div.col-main > div > h1')
     .should('have.text','Checkout')
      cy.get('#billing\\:firstname').click().type('Zack').should('have.value','Zack')
      cy.get('#billing\\:middlename').click().type('Z').should('have.value','Z')
      cy.get('#billing\\:lastname').click().type('Mock').should('have.value','Mock')
      cy.get('#billing\\:email').click().type('zackmock@gmail.com').should('have.value','zackmock@gmail.com')
      cy.get('#billing\\:street1').click().type('Strada Morar, nr 9, Judetul SV').should('have.value', 'Strada Morar, nr 9, Judetul SV')
      cy.get('#billing\\:city').click().type('Suceava').should('have.value','Suceava')
      cy.get('#billing\\:country_id').select('Romania').should('have.value', 'RO')
      cy.get('#billing\\:region_id').select('Suceava').should('have.value', '313')
      cy.get('#billing\\:postcode').click().type(78569).should('have.value', '78569')
      cy.get('#billing\\:telephone').click().type('0789669813').should('have.value', '0789669813')
      cy.get('#billing-buttons-container > .button > :nth-child(1) > span').click()
      cy.get('#shipping-method-buttons-container > .button > :nth-child(1) > span').should('be.visible')
      cy.get('#shipping-method-buttons-container > .button > :nth-child(1) > span').click()
      cy.get('#dt_method_checkmo > label').click().should('have.text','Check / Money order ')
      cy.get('#payment-buttons-container > .button > :nth-child(1) > span').click()
      cy.contains('Grand Total').should('have.text', 'Grand Total')
      cy.get('#checkout-review-table > tfoot > tr.last > td.a-right.last > strong > span').should('have.text','$620.00')
      cy.get('#review-buttons-container > .button > :nth-child(1) > span').should('have.text', 'Place Order')
      cy.get('#review-buttons-container > .button > :nth-child(1) > span').click()
      cy.get('body > div > div > div.main-container.col1-layout > div > div > div.page-title > h1')
      .should('have.text','Your order has been received.')
      cy.get('.sub-title').should('have.text','Thank you for your purchase!')
      cy.get('body > div > div > div.main-container.col1-layout > div > div > p:nth-child(4)')
      .should('have.text','You will receive an order confirmation email with details of your order and a link to track its progress.')


    })

    


})