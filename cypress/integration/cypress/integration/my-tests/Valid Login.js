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
     
     })
    
   it('Customer login with invalid password', () => {
    cy.get('body div.header-language-background p')
    cy.get('.skip-account').click()
    cy.get('#header-account > .links > ul > .last > a').click()
    cy.get('#email').type('mihaelabarba@gmail.com', '{delay:2000}')
    cy.wait(1500)
    cy.get('#pass').type('987654321', '{delay:2000}')
    cy.wait(1500)
    cy.get('#send2').click()
    cy.contains('Invalid login or password.')


   })

   it('Customer login with invalid email', () => {
    cy.get('body div.header-language-background p')
    cy.get('.skip-account').click()
    cy.get('#header-account > .links > ul > .last > a').click()
    cy.get('#email').type('mihaelabarba@yahoo.com', '{delay:2000}')
    cy.wait(1500)
    cy.get('#pass').type('123456789', '{delay:2000}')
    cy.wait(1500)
    cy.get('#send2').click()
    cy.wait(4000)
    cy.contains('Invalid login or password.')

   })


  })
