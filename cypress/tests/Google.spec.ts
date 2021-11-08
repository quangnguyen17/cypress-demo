describe('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('I see Google logo and search bar', () => {
    cy.get(`img[alt="Google"]`).should('be.visible')
    cy.get(`input[title="Search"]`).should('be.visible')
  })
})
