/// <reference types="Cypress" />

describe('Custom Commands', () => {
	it('should login to application using custom cypress commands', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')
		cy.login('username', 'password')
	})
})
