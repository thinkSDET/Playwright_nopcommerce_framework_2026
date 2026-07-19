import {expect, test} from '@playwright/test'
import { LandingPage } from '../../src/pages/landingPage/LandingPage'
import { LoginPage } from '../../src/pages/loginPage/LoginPage'
import loginExpectedData from "../../src/testData/expectedData/loginPage.json";
import loginInputData from '../../src/testdata/inputTestData/loginPage.json'

test("TC_002 - Verify login fails with invalid Email",async({page})=>{
        const landingPage = new LandingPage(page)
        const loginPage = new LoginPage(page)
        await landingPage.navigateToLandingPage()
        await landingPage.navigateToLoginPage()
        await loginPage.submitLogin(loginInputData.invalidLoginDetails[0].emailAddress,loginInputData.invalidLoginDetails[0].password)
        expect(await loginPage.getWarnigMessage()).toBe(loginExpectedData.warningMessage)
})