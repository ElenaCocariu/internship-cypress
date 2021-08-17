describe('Check the "Login" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })

   it('Customer login', () => {
    cy.get('body div.header-language-background p')
    cy.get('.skip-account').click()
    cy.get('#header-account > .links > ul > .last > a').click()
    cy.get('#email').type('mihaelabarba@gmail.com').should('have.value','mihaelabarba@gmail.com' )
    cy.get('#pass').type('123456789').should('have.value','123456789')
    cy.get('#send2 > :nth-child(1) > span').click()
   
   })

   it('Customer login with empty password', () => {
    cy.get('body div.header-language-background p')
    cy.get('.skip-account').click()
    cy.get('#header-account > .links > ul > .last > a').click()
    cy.get('#email').type('mihaelabarba@gmail.com').should('have.value','mihaelabarba@gmail.com' )
    cy.get('#pass')
    cy.get('#send2 > :nth-child(1) > span').click()
    cy.get('#advice-required-entry-pass').should('have.text','This is a required field.')
   })


   it('Welcome "My Dashboard"', () => {
    cy.get('body div.header-language-background p')
    cy.get('.skip-account').click()
    cy.get('#header-account > .links > ul > .last > a').click()
    cy.get('#email').type('mihaelabarba@gmail.com').should('have.value','mihaelabarba@gmail.com' )
    cy.get('#pass').type('123456789').should('have.value','123456789')
    cy.get('#send2 > :nth-child(1) > span').click()
    cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1').should('have.text','My Dashboard')
       
   })



})