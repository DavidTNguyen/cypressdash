describe('Fail Tests', () => {
	it('should search Cypress Docs site, and fail to get result', () => {
		cy.visit("https://docs.cypress.io/")

        cy.get('#search-input').type("Dr. Seuss{enter}")

        // Should have typed "enter" key here
        cy.get('[id="center_col"]').should("contain", "Cypress Documentation")
	});
})
