describe('Working with inputs', ()=>{
    it('should load login page', ()=>{
        cy.visit('http://zero.webappsecurity.com/login.html')
    })
    it('should fill username', ()=>{
        cy.get('#user_login').clear()
        cy.get('#user_login').type('Some Invalid Name', {delay:50})
    })

    it('should fill password', ()=>{
        cy.get('#user_password').clear()
        cy.get('#user_password').type('Some Invalid Password', {delay:50})
    })

    it('should submit login form', ()=>{
        cy.contains('Sing in').click()
    })

    it('should display erro message', ()=>{
        cy.get('.alert-error').should('be.visible')
    })
})