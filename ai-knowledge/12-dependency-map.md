# Dependency Map

## Basepage
Depends On:
- Not Found
Used By:
- `LandingPage`
- `LoginPage`
- `ForgetPasswordPage`

## LandingPage
Depends On:
- `Basepage`
Used By:
- `tests/landing/landing.spec.ts`
- `tests/authentication/login.spec.ts`
- `tests/authentication/forgot-password.spec.ts`
Navigates To:
- `LoginPage`
- `RegisterPage`

## LoginPage
Depends On:
- `Basepage`
Used By:
- `tests/authentication/login.spec.ts`
- `tests/authentication/forgot-password.spec.ts`
Navigates To:
- Not Found

## ForgetPasswordPage
Depends On:
- `Basepage`
Used By:
- `tests/authentication/forgot-password.spec.ts`
Navigates To:
- Not Found

## tests/landing/landing.spec.ts
Depends On:
- `LandingPage`
- `testFixture.ts`
- `landingPage.json`
Used By:
- Not Found

## tests/authentication/login.spec.ts
Depends On:
- `LandingPage`
- `LoginPage`
- `testFixture.ts`
- `loginPage.json`
- `loginPage.json`
Used By:
- Not Found

## tests/authentication/forgot-password.spec.ts
Depends On:
- `LandingPage`
- `LoginPage`
- `ForgetPasswordPage`
- `testFixture.ts`
- `fogetPasswordPage.json`
Used By:
- Not Found

## src/fixtures/testFixture.ts
Depends On:
- `@playwright/test`
- `LandingPage`
- `LoginPage`
- `ForgetPasswordPage`
Used By:
- `tests/landing/landing.spec.ts`
- `tests/authentication/login.spec.ts`
- `tests/authentication/forgot-password.spec.ts`
