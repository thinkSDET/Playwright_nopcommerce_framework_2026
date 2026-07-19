# Framework Overview

## Project
- Root: `g:\Playwright_nopcommerce_framework_2026`
- Framework: Playwright with TypeScript
- Source folder: `src`
- Tests folder: `tests`
- Configuration files: `package.json`, `playwright.config.ts`, `tsconfig.json`

## Components
- Page objects in `src/pages`
- Base page utility in `src/basePage/basePage.ts`
- Custom fixtures in `src/fixtures/testFixture.ts`
- Environment data in `src/config/environments.ts`
- Test data in `src/testdata`

## Test files
- `tests/landing/landing.spec.ts`
- `tests/authentication/login.spec.ts`
- `tests/authentication/forgot-password.spec.ts`

## Data files
- `src/testdata/expectedData/landingPage.json`
- `src/testdata/expectedData/loginPage.json`
- `src/testdata/expectedData/fogetPasswordPage.json`
- `src/testdata/inputTestData/loginPage.json`
- `src/testdata/inputTestData/fogetPasswordPage.json`
