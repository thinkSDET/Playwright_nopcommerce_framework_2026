# Project Index

## Page Objects

| Name | File Path | Depends On | Used By |
|---|---|---|---|
| `Basepage` | `src/basePage/basePage.ts` | Not Found | `LandingPage`, `LoginPage`, `ForgetPasswordPage` |
| `LandingPage` | `src/pages/landingPage/LandingPage.ts` | `Basepage` | `tests/landing/landing.spec.ts`, `tests/authentication/login.spec.ts`, `tests/authentication/forgot-password.spec.ts` |
| `LoginPage` | `src/pages/loginPage/LoginPage.ts` | `Basepage` | `tests/authentication/login.spec.ts`, `tests/authentication/forgot-password.spec.ts` |
| `ForgetPasswordPage` | `src/pages/forgetPasswordPage/forgetPasswordPage.ts` | `Basepage` | `tests/authentication/forgot-password.spec.ts` |

## Test Files

| Name | File Path | Depends On | Used By |
|---|---|---|---|
| `landing.spec.ts` | `tests/landing/landing.spec.ts` | `LandingPage`, `testFixture.ts`, `landingPage.json` | Not Found |
| `login.spec.ts` | `tests/authentication/login.spec.ts` | `LandingPage`, `LoginPage`, `testFixture.ts`, `loginPage.json`, `loginPage.json` | Not Found |
| `forgot-password.spec.ts` | `tests/authentication/forgot-password.spec.ts` | `LandingPage`, `LoginPage`, `ForgetPasswordPage`, `testFixture.ts`, `fogetPasswordPage.json` | Not Found |

## Fixtures

| Name | File Path | Depends On | Used By |
|---|---|---|---|
| `testFixture.ts` | `src/fixtures/testFixture.ts` | `@playwright/test`, `LandingPage`, `LoginPage`, `ForgetPasswordPage` | `tests/landing/landing.spec.ts`, `tests/authentication/login.spec.ts`, `tests/authentication/forgot-password.spec.ts` |

## Utilities

| Name | File Path | Depends On | Used By |
|---|---|---|---|
| `basePage.ts` | `src/basePage/basePage.ts` | `@playwright/test` | `LandingPage`, `LoginPage`, `ForgetPasswordPage` |
| `environments.ts` | `src/config/environments.ts` | Not Found | `playwright.config.ts` |

## Configuration Files

| Name | File Path | Depends On | Used By |
|---|---|---|---|
| `package.json` | `package.json` | Not Found | npm scripts |
| `playwright.config.ts` | `playwright.config.ts` | `src/config/environments.ts` | Playwright runner |
| `tsconfig.json` | `tsconfig.json` | Not Found | TypeScript compiler |

## Test Data Files

| Name | File Path | Depends On | Used By |
|---|---|---|---|
| `landingPage.json` | `src/testdata/expectedData/landingPage.json` | Not Found | `tests/landing/landing.spec.ts` |
| `loginPage.json` | `src/testdata/expectedData/loginPage.json` | Not Found | `tests/authentication/login.spec.ts` |
| `fogetPasswordPage.json` | `src/testdata/expectedData/fogetPasswordPage.json` | Not Found | `tests/authentication/forgot-password.spec.ts` |
| `loginPage.json` | `src/testdata/inputTestData/loginPage.json` | Not Found | `tests/authentication/login.spec.ts` |
| `fogetPasswordPage.json` | `src/testdata/inputTestData/fogetPasswordPage.json` | Not Found | `tests/authentication/forgot-password.spec.ts` |
