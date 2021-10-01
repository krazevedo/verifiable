Cypress.Commands.add("login", (email, password) => {

    cy.visit("/");
    cy.get('[data-cy="userEmail"]').type(email)
    cy.get('[data-cy="userPassword"]').type(password)
    cy.get('[data-cy="signIn"]').click()
    cy.get('[data-cy="network"]').should('be.visible')
    
});
