describe('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('I see a search bar and Google search button', () => {
    cy.get(`input[title="Search"]`).should('be.visible')
    cy.get(`input[value="Google Search"]`).should('be.visible')
  })
})
