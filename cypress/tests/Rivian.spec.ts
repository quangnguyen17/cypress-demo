describe('Rivian', () => {
  beforeEach(() => {
    cy.visit('https://rivian.com/')
  })

  it('When I visit R1T page', () => {
    cy.get('[data-testid=nav-link]').contains('R1T').click()
    cy.url().should('include', 'r1t')
    for (let text of ['R1T', 'EPA estimated range of 314 miles', 'Starting at $67,500']) {
      cy.contains(text)
    }
  })

  it('When I visit R1S page', () => {
    cy.get('[data-testid=nav-link]').contains('R1S').click()
    cy.url().should('include', 'r1s')
    for (let text of ['R1S', 'EPA estimated range of 316 miles', 'Starting at $70,000']) {
      cy.contains(text)
    }
  })

  it('When I visit Gear Shop page', () => {
    cy.get('[data-testid=nav-link]').contains('Gear Shop').click()
    cy.url().should('include', 'gear-shop')
    for (let text of ['All Gear']) {
      cy.contains(text)
    }
  })

  it('When I visit Fleet page', () => {
    cy.get('[data-testid=nav-link]').contains('Fleet').click()
    cy.url().should('include', 'fleet')
    for (let text of [
      'Electrify your fleet',
      'Efficient, sustainable solutions for your business and the planet.',
      'Rivian is developing vehicles, software, charging solutions and services designed to help increase uptime and lower operating costs while helping businesses achieve ambitious sustainability goals.',
    ]) {
      cy.contains(text)
    }
  })
})
