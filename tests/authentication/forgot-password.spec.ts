import {test,expect} from '../../src/fixtures/testFixture'
import forgetPasswordExpectedData from '../../src/testdata/expectedData/fogetPasswordPage.json'
import forgetPasswordInputData from '../../src/testdata/inputTestData/fogetPasswordPage.json'

test("TC_001 - Verify warning message is displayed when the Email Address field is left blank",async({landingPage,forgetPasswordPage,loginPage})=>{
    await landingPage.navigateToLandingPage()
    await landingPage.navigateToLoginPage()
    await loginPage.clickForgotPassword()
    await forgetPasswordPage.submitForgetEmailAddress("")
    expect(await forgetPasswordPage.getWarnigMessage()).toBe(forgetPasswordExpectedData.warningMessage)
})

test("TC_002 - Verify warning message is displayed for an invalid email format",async({landingPage,forgetPasswordPage,loginPage})=>{
    await landingPage.navigateToLandingPage()
    await landingPage.navigateToLoginPage()
    await loginPage.clickForgotPassword()
    await forgetPasswordPage.submitForgetEmailAddress(forgetPasswordInputData.inValidEmailId)
    expect(await forgetPasswordPage.getWarnigMessage()).toBe(forgetPasswordExpectedData.warningMessage)
})