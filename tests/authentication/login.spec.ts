import {test,expect} from '../../src/fixtures/testFixture'
import loginExpectedData from "../../src/testData/expectedData/loginPage.json";
import loginInputData from '../../src/testdata/inputTestData/loginPage.json'

test("TC_002 - Verify login fails with invalid Email",async({landingPage,loginPage})=>{
        await landingPage.navigateToLandingPage()
        await landingPage.navigateToLoginPage()
        await loginPage.submitLogin(loginInputData.invalidLoginDetails[0].emailAddress,loginInputData.invalidLoginDetails[0].password)
        expect(await loginPage.getWarnigMessage()).toBe(loginExpectedData.warningMessage)
})