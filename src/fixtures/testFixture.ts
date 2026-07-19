import {test as base,expect} from '@playwright/test'
import { LandingPage } from '../pages/landingPage/LandingPage'
import { LoginPage } from '../pages/loginPage/LoginPage'

type customeFixture = {
    landingPage :LandingPage
    loginPage : LoginPage
}

export const test = base.extend<customeFixture>({
       
    landingPage :async ({page},use)=>{
        await use(new LandingPage(page))
    },

    loginPage :async ({page},use)=>{
        await use(new LoginPage(page))
    }
})

test.beforeEach(async ({page})=>{
    await page.setViewportSize({
        width: 1920,
        height: 1080
    });
})
export { expect };

