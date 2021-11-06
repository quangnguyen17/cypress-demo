describe('Home', () => {
  const APP_URL = 'https://rivian.com'

  beforeEach(() => {
    cy.visit(`${APP_URL}/`)
  })

  for (let text of ['INTRODUCING', 'Forever', 'Our contribution to the planet.']) {
    it(`I see ${text}`, () => {
      cy.contains(text)
    })
  }

  for (let button of [
    { name: 'Learn More', selector: '.StyledContent--1t5q8k7 > [data-testid="Forever-Learn More-overlay-button"]' },
    { name: 'Hambuger Menu Button', selector: '.StyledHamburgerMenuButton--1jzuubo' },
  ]) {
    it(`I see ${button.name}`, () => {
      cy.get(button.selector).should('be.visible')
    })
  }
})
