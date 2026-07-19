# Execution Flow

## Actual execution flow

1. npm script
   - `npm run test:qa`
   - `npm run test:stage`
   - `npm run test:preprod`
2. `playwright.config.ts`
   - reads `process.env.ENV`
   - resolves `baseURL` from `src/config/environments.ts`
3. Fixture setup
   - `src/fixtures/testFixture.ts`
   - creates `landingPage`, `loginPage`, `forgetPasswordPage`
   - runs `test.beforeEach` to set viewport size
4. Page object usage
   - `LandingPage`, `LoginPage`, `ForgetPasswordPage`
5. Test data usage
   - `src/testdata/inputTestData/*`
   - `src/testdata/expectedData/*`
6. Assertions
   - `expect(...).toBe(...)`
