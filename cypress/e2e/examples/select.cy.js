/// <reference types="Cypress" />

describe('Select Box', ()=>{
    it('should load website with select box', ()=>{
        cy.visit('https://devexpress.github.io/testcafe/example/')

        cy.get('#preferred-interface').select('Both')
        // cy.get('#preferred-interface').select('have.value', 'Both')

        cy.get('#preferred-interface').select('JavaScript API')
        // cy.get('#preferred-interface').select('have.value', 'JavaScript API')

    })
})