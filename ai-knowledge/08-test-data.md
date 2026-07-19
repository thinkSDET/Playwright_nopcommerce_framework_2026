# Test Data

## Input Test Data Files

- `src/testdata/inputTestData/loginPage.json`
  - `invalidLoginDetails[0].emailAddress`: `Test@gmail.com`
  - `invalidLoginDetails[0].password`: `Admin@123`
- `src/testdata/inputTestData/fogetPasswordPage.json`
  - `inValidEmailId`: `TEST$gmail.com`

## Expected Test Data Files

- `src/testdata/expectedData/landingPage.json`
  - `pageTitle`: `Your Store`
  - `copyrightText`: `Powered By OpenCart naveenopencart © 2026`
- `src/testdata/expectedData/loginPage.json`
  - `warningMessage`: `Warning: No match for E-Mail Address and/or Password.`
- `src/testdata/expectedData/fogetPasswordPage.json`
  - `warningMessage`: `Warning: The E-Mail Address was not found in our records, please try again!`
