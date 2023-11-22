/// <reference types="Cypress" />

describe('Passowrd Test', ()=>{
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')

    })

    it('forgotten password', ()=>{
        //should click on the sign button
        cy.get('#signin_button').click()

        // should click on the forgotten pasasword
        cy.get('.offset3 > a').click()

        // shoul fill email form
        cy.get('#user_email').type('teste.email@email.com')

        //shoul submit the form
        cy.contains('Send Password').click()

    })
})