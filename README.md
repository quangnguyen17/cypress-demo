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

## How to write a Cypress test:

1. Create a new file in `cypress/tests` folder and name it in following format: `YourTestName.spec.ts`.
2. Follow the sample test file below to learn how to write yours:

```typescript
// Google.spec.ts

describe('Google', () => {
  const APP_URL = 'https://google.com'

  beforeEach(() => {
    cy.visit(`${APP_URL}`)
  })

  it(`I see Google image`, () => {
    cy.get('img[alt="Google"]')
  })
})
```
