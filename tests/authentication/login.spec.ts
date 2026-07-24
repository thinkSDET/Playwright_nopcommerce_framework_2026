import { test, expect } from '../../src/fixtures/testFixture'
import loginExpectedData from "../../src/testdata/expectedData/loginPage.json";
import loginInputData from '../../src/testdata/inputTestData/loginPage.json'


test.describe('Login functionality', () => {
        test.beforeEach(async ({ landingPage }) => {
                await landingPage.navigateToLandingPage()
                await landingPage.navigateToLoginPage()
        })

        test("TC_001 - Verify login fails with invalid Email", async ({ loginPage }) => {

                await loginPage.submitLogin(loginInputData.invalidLoginDetails[0].emailAddress, loginInputData.invalidLoginDetails[0].password)
                expect(await loginPage.getWarnigMessage()).toBe(loginExpectedData.warningMessage)
        })

        test("TC_002 - Verify login success with valid Email", async ({ loginPage, page }) => {
                await loginPage.submitLogin(loginInputData.validLoginDetails[0].emailAddress, loginInputData.validLoginDetails[0].password)
                await expect(page).toHaveURL(/route=account\/account/);
        })
})


