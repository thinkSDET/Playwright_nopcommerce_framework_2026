# Playwright NopCommerce Framework 2026

A TypeScript Playwright test framework for NopCommerce UI validation using page objects and custom fixtures.

## Features

- Landing page validation
- Login validation with invalid credentials
- Forgot password validation

## Project Structure

- `src`: page objects, fixtures, configuration, and test data
- `tests`: Playwright test specifications
- `playwright.config.ts`: Playwright runtime configuration
- `package.json`: npm scripts and dev dependencies

## Tech Stack

- TypeScript
- Playwright
- `@playwright/test`
- `cross-env`

## Prerequisites

- Node.js
- npm

## Installation

```bash
npm install
```

## Running Tests

Available npm scripts:

```bash
npm run test:qa
npm run test:stage
npm run test:preprod
```

Each script runs `cross-env ENV=<env> playwright test`.

## Environment Configuration

Environment URLs are defined in `src/config/environments.ts`.

Available environments:

- `qa`
- `stage`
- `preprod`

`playwright.config.ts` selects the environment using `process.env.ENV || "qa"` and resolves `baseURL` from `environments`.

## Framework Architecture

- `playwright.config.ts` loads runtime configuration and `baseURL`
- `src/fixtures/testFixture.ts` defines custom fixtures
- Page objects are implemented in `src/pages`
- Shared utilities are in `src/basePage`
- Test data is stored in `src/testdata`

## Fixtures

Defined in `src/fixtures/testFixture.ts`:

- `landingPage`
- `loginPage`
- `forgetPasswordPage`

The fixture file extends Playwright `test` and exports `test` and `expect`.

A `beforeEach` hook sets viewport size to `1920x1080`.

## Page Object Model

Implemented page objects:

- `src/pages/landingPage/LandingPage.ts`
- `src/pages/loginPage/LoginPage.ts`
- `src/pages/forgetPasswordPage/forgetPasswordPage.ts`

Shared base page utility:

- `src/basePage/basePage.ts`

## Test Data

Input test data files:

- `src/testdata/inputTestData/loginPage.json`
- `src/testdata/inputTestData/fogetPasswordPage.json`

Expected test data files:

- `src/testdata/expectedData/landingPage.json`
- `src/testdata/expectedData/loginPage.json`
- `src/testdata/expectedData/fogetPasswordPage.json`

## Folder Structure

```
.
├── LICENSE.txt
├── package.json
├── playwright.config.ts
├── README.md
├── tsconfig.json
├── src
│   ├── basePage
│   │   └── basePage.ts
│   ├── config
│   │   └── environments.ts
│   ├── fixtures
│   │   └── testFixture.ts
│   ├── pages
│   │   ├── landingPage
│   │   │   └── LandingPage.ts
│   │   ├── loginPage
│   │   │   └── LoginPage.ts
│   │   └── forgetPasswordPage
│   │       └── forgetPasswordPage.ts
│   └── testdata
│       ├── expectedData
│       │   ├── landingPage.json
│       │   ├── loginPage.json
│       │   └── fogetPasswordPage.json
│       └── inputTestData
│           ├── loginPage.json
│           └── fogetPasswordPage.json
├── tests
│   ├── authentication
│   │   ├── forgot-password.spec.ts
│   │   └── login.spec.ts
│   └── landing
│       └── landing.spec.ts
├── playwright-report
└── test-results
```

## Execution Flow

1. Run `npm run test:<env>`.
2. `playwright.config.ts` reads `process.env.ENV` and selects `baseURL`.
3. Fixtures from `src/fixtures/testFixture.ts` create `landingPage`, `loginPage`, and `forgetPasswordPage`.
4. Tests execute page object methods.
5. Assertions compare values against expected test data.

## Contributing

Contributions are welcome. Please open issues or pull requests for changes.

## License

This project is licensed under the MIT License.
