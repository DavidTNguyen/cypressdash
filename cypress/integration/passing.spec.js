describe('passing test', () => {
	it('should Cypress Docs Site, and find the heading', () => {
		cy.visit("https://docs.cypress.io/")

        cy.get('#search-input').type("Dr. Seuss{enter}")

        // Should have typed "enter" key here
        cy.get('h1').should("contain", "Why Cypress?")
	});
})
