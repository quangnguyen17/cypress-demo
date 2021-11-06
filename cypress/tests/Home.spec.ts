describe('Home', () => {
  const APP_URL = 'https://rivian.com'

  const text = ['INTRODUCING', 'Forever', 'Our contribution to the planet.']

  const buttons = [
    { name: 'Learn More', selector: '.StyledContent--1t5q8k7 > [data-testid="Forever-Learn More-overlay-button"]' },
    { name: 'Hambuger Menu Button', selector: '.StyledHamburgerMenuButton--1jzuubo' },
  ]

  beforeEach(() => {
    cy.visit(`${APP_URL}/`)
  })

  it(`I see ${text.join(', ')} text.`, () => {
    for (let t of text) {
      cy.contains(t)
    }
  })

  it(`I see ${buttons.reduce((m, b, i) => `${m}${b.name}${i === buttons.length - 1 ? '' : ', '}`, '')} buttons.`, () => {
    for (let b of buttons) {
      cy.get(b.selector).should('be.visible')
    }
  })
})
