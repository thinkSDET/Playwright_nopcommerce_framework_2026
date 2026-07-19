# Tests

## Landing feature

### `tests/landing/landing.spec.ts`
- Feature: Landing page validation
- Test Cases:
  - `TC_01 - Verify application launches successfully`
- Page Objects Used:
  - `LandingPage`
- Fixtures Used:
  - `landingPage`
- Test Data Used:
  - `src/testdata/expectedData/landingPage.json`
- Expected Data Used:
  - `src/testdata/expectedData/landingPage.json`
- Assertions:
  - `expect(await landingPage.getPageTitle()).toBe(landingPageData.pageTitle)`
  - `expect(await landingPage.getCopyrightText()).toBe(landingPageData.copyrightText)`
- Execution Flow:
  - `LandingPage.navigateToLandingPage()`
  - `LandingPage.getPageTitle()`
  - `LandingPage.getCopyrightText()`
- Dependencies:
  - `src/fixtures/testFixture.ts`
  - `src/pages/landingPage/LandingPage.ts`
  - `src/testdata/expectedData/landingPage.json`

## Authentication feature

### `tests/authentication/login.spec.ts`
- Feature: Login authentication invalid credentials
- Test Cases:
  - `TC_002 - Verify login fails with invalid Email`
- Page Objects Used:
  - `LandingPage`
  - `LoginPage`
- Fixtures Used:
  - `landingPage`
  - `loginPage`
- Test Data Used:
  - `src/testdata/inputTestData/loginPage.json`
- Expected Data Used:
  - `src/testdata/expectedData/loginPage.json`
- Assertions:
  - `expect(await loginPage.getWarnigMessage()).toBe(loginExpectedData.warningMessage)`
- Execution Flow:
  - `LandingPage.navigateToLandingPage()`
  - `LandingPage.navigateToLoginPage()`
  - `LoginPage.submitLogin(...)`
  - `LoginPage.getWarnigMessage()`
- Dependencies:
  - `src/fixtures/testFixture.ts`
  - `src/pages/landingPage/LandingPage.ts`
  - `src/pages/loginPage/LoginPage.ts`
  - `src/testdata/inputTestData/loginPage.json`
  - `src/testdata/expectedData/loginPage.json`

### `tests/authentication/forgot-password.spec.ts`
- Feature: Forgot password workflow
- Test Cases:
  - `TC_001 - Verify warning message is displayed when the Email Address field is left blank`
  - `TC_002 - Verify warning message is displayed for an invalid email format`
- Page Objects Used:
  - `LandingPage`
  - `LoginPage`
  - `ForgetPasswordPage`
- Fixtures Used:
  - `landingPage`
  - `loginPage`
  - `forgetPasswordPage`
- Test Data Used:
  - `src/testdata/inputTestData/fogetPasswordPage.json`
- Expected Data Used:
  - `src/testdata/expectedData/fogetPasswordPage.json`
- Assertions:
  - `expect(await forgetPasswordPage.getWarnigMessage()).toBe(forgetPasswordExpectedData.warningMessage)`
- Execution Flow:
  - `LandingPage.navigateToLandingPage()`
  - `LandingPage.navigateToLoginPage()`
  - `LoginPage.clickForgotPassword()`
  - `ForgetPasswordPage.submitForgetEmailAddress(...)`
  - `ForgetPasswordPage.getWarnigMessage()`
- Dependencies:
  - `src/fixtures/testFixture.ts`
  - `src/pages/landingPage/LandingPage.ts`
  - `src/pages/loginPage/LoginPage.ts`
  - `src/pages/forgetPasswordPage/forgetPasswordPage.ts`
  - `src/testdata/inputTestData/fogetPasswordPage.json`
  - `src/testdata/expectedData/fogetPasswordPage.json`
