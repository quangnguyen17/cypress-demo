describe('Rivian', () => {
  beforeEach(() => {
    cy.visit('https://rivian.com/')
  })

  it('When I visit R1T page', () => {
    cy.get('[data-testid=nav-link]').contains('R1T').click()
    cy.url().should('include', 'r1t')
    cy.contains('R1T')
    cy.contains('A truck built for whatever you call a road. Your electric adventure awaits.')
    cy.contains('Starting at $67,500 with an EPA estimated range of 314 miles.')
  })

  it('When I visit R1S page', () => {
    cy.get('[data-testid=nav-link]').contains('R1S').click()
    cy.url().should('include', 'r1s')
    cy.contains('R1S')
    cy.contains('Explore the places you love with the people you love. Grab your camera. It’s time to make some memories.')
    cy.contains('Starting at $70,000 with an EPA estimated range of 316 miles.')
  })

  it('When I visit Experience page', () => {
    cy.get('[data-testid=nav-link]').contains('Experience').click()
    cy.url().should('include', 'experience')
    cy.contains('Our ownership experience is designed to be seamless and intuitive, with benefits focused on the values we share.')
    cy.contains('Car buying made simple.')
    cy.contains(
      'You can manage the entire purchase process on your phone or computer. If you ever have a question, your personal Rivian Guide is here to help. To ensure your happiness, you have 7 days or 1,000 miles to return your vehicle after it’s delivered.¹ Our goal is to make buying a Rivian easy and transparent.'
    )
  })

  it('When I visit Fleet page', () => {
    cy.get('[data-testid=nav-link]').contains('Fleet').click()
    cy.url().should('include', 'fleet')
    cy.contains('Electrify your fleet')
    cy.contains('Efficient, sustainable solutions for your business and the planet.')
    cy.contains(
      'Rivian is developing vehicles, software, charging solutions and services designed to help increase uptime and lower operating costs while helping businesses achieve ambitious sustainability goals.'
    )
  })
})