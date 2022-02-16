// https://docs.cypress.io/api/introduction/api.html

describe('Squares e2e', () => {
  it('Visits the app root url and checks if element with class "squares" is visible', () => {
    cy.visit('/')
    cy.get('.squares')
    .should('be.visible');
  })
})
