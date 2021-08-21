
describe('API requests',() => {

    it('GET -read 1',() => {

        cy.request('https://petstore.swagger.io/v2/store/inventory').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
            
    })
})
   

    it('GET -read 2',() => {

        cy.request('https://petstore.swagger.io/v2/store/order/15').then((response) => {
            expect(response).to.have.property('status', 200)
            expect(response.body).to.not.be.null
           

})
    })



    it('POST -Create a new resource',() => {

        const item = {
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2021-08-21T19:03:02.972Z",
            "status": "placed",
            "complete": true
          }
        cy.request('POST','https://petstore.swagger.io/v2/store/order/', item )
        .its('body')
        .should('include',{id:9223372036854776000})
        .should('include',{petId:0})
        .should('include',{quantity:0})
        .should('include',{shipDate: "2021-08-21T19:03:02.972+0000"})
        .should('include',{status: "placed"})
        .should('include',{complete: true})
        
        
           
})
    })








    


    
