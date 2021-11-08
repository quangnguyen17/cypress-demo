# cypress-demo

- This demo project will show you how to write [Cypress](https://www.cypress.io/) E2E tests using Typescript.

## How to run project locally

- Clone and `cd` into the repo, run `npm install` to install project's dependencies.
- To run the example tests:
  - With [Cypress](https://www.cypress.io/) open: `npm run cy`.
  - For CI/CD pipeline: `npm run cy:ci`.

## Folder Structure:

- Tests: `cypress/tests`.
- Cypress config file: `cypress.json`.

## Examples of [Cypress](https://www.cypress.io/) E2E tests:

#### Example 1: `Google.spec.ts`

```typescript
describe('Google', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  it('I see Google logo and search bar', () => {
    cy.get(`img[alt="Google"]`).should('be.visible')
    cy.get(`input[title="Search"]`).should('be.visible')
  })
})
```

#### Example 2: `Rivian.spec.ts`

```typescript

```
