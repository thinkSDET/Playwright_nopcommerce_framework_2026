import {test as base,expect} from '@playwright/test'
import { LandingPage } from '../pages/landingPage/LandingPage'
import { LoginPage } from '../pages/loginPage/LoginPage'
import { ForgetPasswordPage } from '../pages/forgetPasswordPage/forgetPasswordPage'

type customeFixture = {
    landingPage :LandingPage
    loginPage : LoginPage
    forgetPasswordPage:ForgetPasswordPage
}

export const test = base.extend<customeFixture>({
       
    landingPage :async ({page},use)=>{
        await use(new LandingPage(page))
    },

    loginPage :async ({page},use)=>{
        await use(new LoginPage(page))
    },
    forgetPasswordPage :async ({page},use)=>{
        await use(new ForgetPasswordPage(page))
    }
})

test.beforeEach(async ({page})=>{
    await page.setViewportSize({
        width: 1920,
        height: 1080
    });
})
export { expect };

