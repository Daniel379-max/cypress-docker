/// <reference types="Cypress" />

describe('Browser Actions', () => {
	it('should load books website', () => {
		cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
        cy.log('Before Reloaded')
        cy.reload()
        cy.log('After Reloaded')

    })

	it('sholud click on travel category', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})

	// it('should display correct number of books', ()=>{
	//     cy.get('.product_pod').its('lenght').should('eq', 11)
	// })

	it('should click on poetry category', () => {
		cy.get('a').contains('Poetry').click()
	})

    it('should click on Olio detail', () => {
		cy.get('a').contains('Olio').click()
	})

    it('should have correct price tag', () => {
		cy.get('.price_color').contains('£23.88')
	})
})
