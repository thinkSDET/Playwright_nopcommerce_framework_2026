# Folder Structure

## Root folders
- `src`
- `tests`
- `playwright-report`
- `test-results`

## `src`
- `basePage`
  - `basePage.ts`
- `config`
  - `environments.ts`
- `fixtures`
  - `testFixture.ts`
- `pages`
  - `landingPage/LandingPage.ts`
  - `loginPage/LoginPage.ts`
  - `forgetPasswordPage/forgetPasswordPage.ts`
- `testdata`
  - `expectedData`
    - `landingPage.json`
    - `loginPage.json`
    - `fogetPasswordPage.json`
  - `inputTestData`
    - `loginPage.json`
    - `fogetPasswordPage.json`

## `tests`
- `landing/landing.spec.ts`
- `authentication/login.spec.ts`
- `authentication/forgot-password.spec.ts`
