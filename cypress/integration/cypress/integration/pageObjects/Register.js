
 class Register{

     visit(){
         return cy.visit('http://live.demoguru99.com/index.php/customer/account/create/')
     }

     fillFirstname(){
         return cy.get('#firstname')
     }

     fillMiddlename(){
         return cy.get('#middlename')
     }

     fillLastname(){
         return  cy.get('#lastname')
     }

     fillEmail(){
         return  cy.get('#email_address')
     }

     fillPassword(){
         return cy.get('#password')
     }

     fillConfirmation(){
         return cy.get('#confirmation')
     }

     fillRegisterbutton(){
         return  cy.get('.buttons-set > .button')
     }
 }

 export default Register