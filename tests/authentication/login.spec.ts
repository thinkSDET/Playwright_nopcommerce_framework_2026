import {expect, test} from '@playwright/test'
import { LandingPage } from '../../src/pages/landingPage/LandingPage'
import { LoginPage } from '../../src/pages/loginPage/LoginPage'
import loginPageData from "../../src/testData/expectedData/loginPage.json";

test("TC_002 - Verify login fails with invalid Email",async({page})=>{
        const landingPage = new LandingPage(page)
        const loginPage = new LoginPage(page)
        await landingPage.navigateToLandingPage()
        await landingPage.navigateToLoginPage()
        await loginPage.submitLogin("TEST@gmail.com","Admin@123325")
        expect(await loginPage.getWarnigMessage()).toBe(loginPageData.warningMessage)
})