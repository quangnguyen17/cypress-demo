describe('Sign In', () => {
  const APP_URL = 'https://rivian.com'

  beforeEach(() => {
    cy.visit(`${APP_URL}/account`)
    cy.contains('Sign In')
    cy.get('[data-testid=Signin-email]').should('be.empty')
    cy.get('[data-testid=Signin-password]').should('be.empty')
  })

  it('I see validation errors if the input fields are empty.', () => {
    cy.get('[data-testid=Signin-button-submit]').click()
    cy.contains('Enter your email address.')
    cy.contains('Enter your password.')
  })

  it('I see "Enter your password." message if only email input field is filled out.', () => {
    cy.get('[data-testid=Signin-email]').type('test@rivian.com')
    cy.get('[data-testid=Signin-button-submit]').click()
    cy.contains('Enter your password.')
  })

  it('I see "Enter your email address." message if only password input field is filled out.', () => {
    cy.get('[data-testid=Signin-password]').type('riviantestpw')
    cy.get('[data-testid=Signin-button-submit]').click()
    cy.contains('Enter your email address.')
  })
})
