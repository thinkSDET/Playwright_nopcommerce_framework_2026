# Assertions

## Assertion patterns
- `expect(await landingPage.getPageTitle()).toBe(landingPageData.pageTitle)`
- `expect(await landingPage.getCopyrightText()).toBe(landingPageData.copyrightText)`
- `expect(await loginPage.getWarnigMessage()).toBe(loginExpectedData.warningMessage)`
- `expect(await forgetPasswordPage.getWarnigMessage()).toBe(forgetPasswordExpectedData.warningMessage)`

## Assertion library
- `expect` from `@playwright/test`

## Assertion style
- Strict equality using `.toBe(...)`
