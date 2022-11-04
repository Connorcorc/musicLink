import { createYield } from "typescript"

describe('LandingPage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should have text asking how the user wants to vibe', () => {
    cy.get('h1')
    .contains('How do you')
  })

})