describe('Fleet', () => {
  const APP_URL = 'https://rivian.com'

  beforeEach(() => {
    cy.visit(`${APP_URL}/fleet`)
  })

  for (let text of ['Electrify your fleet', 'Efficient, sustainable solutions for your business and the planet.']) {
    it(`I see ${text}`, () => {
      cy.contains(text)
    })
  }

  for (let button of [{ name: 'Hambuger Menu Button', selector: '.StyledHamburgerMenuButton--1jzuubo' }]) {
    it(`I see ${button.name}`, () => {
      cy.get(button.selector).should('be.visible')
    })
  }
})
