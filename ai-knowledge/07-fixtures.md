# Fixtures

## `src/fixtures/testFixture.ts`

- Purpose: Extend Playwright `test` with custom page object fixtures.
- Custom Fixtures:
  - `landingPage`: `LandingPage`
  - `loginPage`: `LoginPage`
  - `forgetPasswordPage`: `ForgetPasswordPage`
- Lifecycle:
  - Fixtures are created per test.
- beforeEach:
  - sets viewport size to `1920x1080`
- afterEach:
  - none defined
- Dependencies:
  - `@playwright/test`
  - `src/pages/landingPage/LandingPage.ts`
  - `src/pages/loginPage/LoginPage.ts`
  - `src/pages/forgetPasswordPage/forgetPasswordPage.ts`
- Exported Members:
  - `test`
  - `expect`
