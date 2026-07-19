# Workspace Analysis

## Project Overview

- Root folder: `g:\Playwright_nopcommerce_framework_2026`
- Project type: Playwright test framework in TypeScript
- Test runner: `@playwright/test`
- Scripts defined in `package.json`:
  - `npm run test:qa` -> `cross-env ENV=qa playwright test`
  - `npm run test:stage` -> `cross-env ENV=stage playwright test`
  - `npm run test:preprod` -> `cross-env ENV=preprod playwright test`

## Configuration

### `playwright.config.ts`

- Imports `defineConfig` and `devices` from `@playwright/test`
- Imports `environments` from `./src/config/environments`
- Selects environment via `process.env.ENV || "qa"`
- Uses `environments[env as keyof typeof environments]` as `baseURL`
- Sets `testDir` to `./tests`
- Enables `fullyParallel: true`
- Uses `reporter: 'html'`
- Sets `headless: false`
- Defines a single project:
  - `chromium`

### `tsconfig.json`

- `target`: `ES2022`
- `module`: `NodeNext`
- `moduleResolution`: `NodeNext`
- `strict`: `true`
- `esModuleInterop`: `true`
- `resolveJsonModule`: `true`
- `types`: [`node`]
- Includes all `**/*.ts`
- Excludes `node_modules`, `allure-report`, `playwright-report`, `test-results`

## Environment Data

### `src/config/environments.ts`

- `qa`: `https://naveenautomationlabs.com/opencart/`
- `stage`: `https://naveenautomationlabsStage.com/opencart/`
- `preprod`: `https://naveenautomationlabsPreProd.com/opencart/`

## Base Page Class

### `src/basePage/basePage.ts`

- Class: `Basepage`
- Constructor parameter: `page: Page`
- Protected property: `page`
- Protected method: `getNormalizedText(locator: Locator): Promise<string>`
  - Returns `locator.innerText()` with whitespace normalized and trimmed

## Fixtures and Test Extensions

### `src/fixtures/testFixture.ts`

- Imports `test as base` and `expect` from `@playwright/test`
- Imports page objects:
  - `LandingPage` from `../pages/landingPage/LandingPage`
  - `LoginPage` from `../pages/loginPage/LoginPage`
  - `ForgetPasswordPage` from `../pages/forgetPasswordPage/forgetPasswordPage`
- Extends fixture with `customeFixture`:
  - `landingPage: LandingPage`
  - `loginPage: LoginPage`
  - `forgetPasswordPage: ForgetPasswordPage`
- Fixture definitions:
  - `landingPage` creates `new LandingPage(page)`
  - `loginPage` creates `new LoginPage(page)`
  - `forgetPasswordPage` creates `new ForgetPasswordPage(page)`
- `test.beforeEach` sets viewport size to `1920x1080`
- Exports `test` and `expect`

## Page Objects

### `src/pages/landingPage/LandingPage.ts`

- Class: `LandingPage` extends `Basepage`
- Locators:
  - `footerCopyright` -> `//footer//p`
  - `myAccount` -> `//a[@title='My Account']//span[text()='My Account']`
  - `register` -> `//a[text()="Register"]`
  - `login` -> `//a[text()="Login"]`
- Methods:
  - `navigateToLandingPage()` -> `this.page.goto("")`
  - `getPageTitle()` -> `this.page.title()`
  - `getCopyrightText()` -> `getNormalizedText(this.footerCopyright)`
  - `navigateToLoginPage()` -> clicks `myAccount`, then `login`
  - `navigateToRegisterPage()` -> clicks `myAccount`, then `register`

### `src/pages/loginPage/LoginPage.ts`

- Class: `LoginPage` extends `Basepage`
- Locators:
  - `inputEmailAddress` -> `input#input-email`
  - `inputPassword` -> `input#input-password`
  - `loginButton` -> `//input[@value='Login']`
  - `forgetPasswordLink` -> `//form//a[text()='Forgotten Password']`
  - `warningMessage` -> `//div[@class='alert alert-danger alert-dismissible']`
- Methods:
  - `submitLogin(emailAddress: string, password: string)`
    - fills email and password, clicks login button
  - `getWarnigMessage()`
    - returns normalized warning text
  - `clickForgotPassword()`
    - clicks the forgotten password link

### `src/pages/forgetPasswordPage/forgetPasswordPage.ts`

- Class: `ForgetPasswordPage` extends `Basepage`
- Locators:
  - `inputEmailAddress` -> `input#input-email`
  - `continueButton` -> `//input[@value='Continue']`
  - `warningMessage` -> `//div[@class='alert alert-danger alert-dismissible']`
- Methods:
  - `submitForgetEmailAddress(email: string)`
    - fills email input, clicks continue button
  - `getWarnigMessage()`
    - returns normalized warning text

## Test Files

### `tests/landing/landing.spec.ts`

- Uses fixture: `test` and `expect` from `../../src/fixtures/testFixture`
- Imports expected data from `../../src/testData/expectedData/landingPage.json`
- Test case:
  - `TC_01 - Verify application launches successfully`
    - `landingPage.navigateToLandingPage()`
    - asserts `landingPage.getPageTitle()` equals `pageTitle`
    - asserts `landingPage.getCopyrightText()` equals `copyrightText`

### `tests/authentication/login.spec.ts`

- Uses fixture: `test` and `expect` from `../../src/fixtures/testFixture`
- Imports expected data from `../../src/testData/expectedData/loginPage.json`
- Imports input data from `../../src/testdata/inputTestData/loginPage.json`
- Test case:
  - `TC_002 - Verify login fails with invalid Email`
    - navigates to landing page and login page
    - submits login with invalid credentials from input data
    - asserts `loginPage.getWarnigMessage()` equals expected warning message

### `tests/authentication/forgot-password.spec.ts`

- Uses fixture: `test` and `expect` from `../../src/fixtures/testFixture`
- Imports expected data from `../../src/testdata/expectedData/fogetPasswordPage.json`
- Imports input data from `../../src/testdata/inputTestData/fogetPasswordPage.json`
- Test cases:
  - `TC_001 - Verify warning message is displayed when the Email Address field is left blank`
    - navigates to landing page and login page
    - clicks forgot password link
    - submits blank email
    - asserts warning message equals expected data
  - `TC_002 - Verify warning message is displayed for an invalid email format`
    - navigates to landing page and login page
    - clicks forgot password link
    - submits invalid email from input data
    - asserts warning message equals expected data

## Test Data

### `src/testdata/expectedData/landingPage.json`

- `pageTitle`: `Your Store`
- `copyrightText`: `Powered By OpenCart naveenopencart © 2026`

### `src/testdata/expectedData/loginPage.json`

- `warningMessage`: `Warning: No match for E-Mail Address and/or Password.`

### `src/testdata/expectedData/fogetPasswordPage.json`

- `warningMessage`: `Warning: The E-Mail Address was not found in our records, please try again!`

### `src/testdata/inputTestData/loginPage.json`

- `invalidLoginDetails[0].emailAddress`: `Test@gmail.com`
- `invalidLoginDetails[0].password`: `Admin@123`

### `src/testdata/inputTestData/fogetPasswordPage.json`

- `inValidEmailId`: `TEST$gmail.com`

## Execution Flow

- Command `npm run test:qa` sets `ENV=qa`
- `playwright.config.ts` resolves `baseURL` from `environments.qa`
- Each test uses the `test` fixture from `src/fixtures/testFixture.ts`
- `LandingPage.navigateToLandingPage()` loads the configured base URL via `page.goto("")`
- The fixture creates page object instances for each test before use
- `test.beforeEach` sets the viewport to `1920x1080`

## Notes

- The project is Windows-compatible and uses TypeScript source files only.
- The workspace contains a single Playwright project configuration focused on Chromium.
