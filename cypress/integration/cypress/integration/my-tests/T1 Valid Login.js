
describe('Validation of the "Login" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })

   it('Customer login with valid credentials', () => {

      cy.get('body div.header-language-background p')
      cy.get('.skip-account').click()
      cy.get('#header-account > .links > ul > .last > a').click()
      cy.get('#email').type('mihaelabarba@gmail.com').should('have.value','mihaelabarba@gmail.com' )
      cy.get('#pass').type('123456789').should('have.value','123456789')
      cy.get('#send2 > :nth-child(1) > span').click()
      cy.get('body > div > div > div.main-container.col2-left-layout > div > div.col-main > div > div > div.page-title > h1')
      .should('have.text', 'My Dashboard')
     
     })
    

   it('Customer login with invalid password', () => {

    cy.get('body div.header-language-background p')
    cy.get('.skip-account').click()
    cy.get('#header-account > .links > ul > .last > a').click()
    cy.get('#email').type('mihaelabarba@gmail.com').should('have.value','mihaelabarba@gmail.com')
    cy.get('#pass').type('987654321').should('have.value', '987654321')
    cy.get('#send2').click()
    cy.get('.error-msg > ul > li').should('have.text', 'Invalid login or password.')


   })

   it('Customer login with invalid email', () => {

    cy.get('body div.header-language-background p')
    cy.get('.skip-account').click()
    cy.get('#header-account > .links > ul > .last > a').click()
    cy.get('#email').type('mihaelabarba@yahoo.com').should('have.value','mihaelabarba@yahoo.com')
    cy.get('#pass').type('123456789').should('have.value', '123456789')
    cy.get('#send2').click()
    cy.get('.error-msg > ul > li').should('have.text', 'Invalid login or password.')

   })


  })
