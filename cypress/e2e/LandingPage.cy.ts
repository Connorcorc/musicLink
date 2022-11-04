import { createYield } from "typescript"

describe('LandingPage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have text asking how the user wants to vibe', () => {
    cy.get('.vibe-choice')
    .contains('How do you')
  })

  it('should have a list of genres', () => {
    cy.get('#genres')
    .contains('Choose a genre')
  })

  it('should show a Vibe button when genre is selected', () => {
    cy.get('#genres').select('jazz')
    .get('.genre-select-button')
    .should('be.visible')
  })

  it('should take you to the main page when the genre is selected and the vibe button is clicked', () => {
    cy.get('#genres').select('jazz')
    .get('.genre-select-button')
    .click()
    cy.url()
      .should('be.equal', 'http://localhost:3000/main')
  })

})