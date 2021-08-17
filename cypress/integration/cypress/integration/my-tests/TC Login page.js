describe('Check the "Login" Page', () => {
    beforeEach(() => {
  
      cy.visit('http://live.demoguru99.com')
  
    })

   it('Customer login', () => {
    cy.visit('http://live.demoguru99.com/index.php/customer/account/login/')
    cy.get('#email').type('mihaelabarba@gmail.com', '{delay:2000}')
    cy.wait(1500)
    cy.get('#pass').type('123456789', '{delay:2000}')
    cy.wait(1500)
    cy.get('#send2').click()
       
   })

   it('Welcome "My Dashboard"', () => {
    cy.visit('http://live.demoguru99.com/index.php/customer/account/login/')
    cy.get('#email').type('mihaelabarba@gmail.com', '{delay:2000}')
    cy.wait(1500)
    cy.get('#pass').type('123456789', '{delay:2000}')
    cy.wait(1500)
    cy.get('#send2').click()
    cy.wait(1500)
    cy.get('a > strong').click()
       
   })



})