/// <reference types="Cypress" />
describe('Write / Read Data to JSON / Text file', () => {
	it('should write data into JSON', () => {
		cy.writeFile('log.json', { name: 'Daniel', age: 21 })
	})

	it('shoulçd write data to the text file', () => {
		cy.writeFile('log.txt', 'Hello word')
	})
	it('should read and verify data from JSON file', () => {
		cy.readFile('log.json').its('age').should('eq', 21)
	})

	it('should read and verify browser document content', () => {
		cy.visit('https://www.example.com')
		cy.wait(2000)
		cy.document().its('contentType').should('eq', 'text/html')

		cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
	})
})
