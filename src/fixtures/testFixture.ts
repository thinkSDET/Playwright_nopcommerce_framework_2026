import { test as base, expect } from '@playwright/test'
import * as allure from "allure-js-commons";
import fs from "fs";
import { LandingPage } from '../pages/landingPage/LandingPage'
import { LoginPage } from '../pages/loginPage/LoginPage'
import { ForgetPasswordPage } from '../pages/forgetPasswordPage/forgetPasswordPage'
import { RegisterAccountPage } from '../pages/registerPage/registerPage'
import { AccountSuccesspage } from '../pages/accountSuccessPage/accountSuccessPage'

type customeFixture = {
    landingPage: LandingPage
    loginPage: LoginPage
    forgetPasswordPage: ForgetPasswordPage
    registerAccountPage: RegisterAccountPage
    accountSuccesspage: AccountSuccesspage
}

export const test = base.extend<customeFixture>({

    landingPage: async ({ page }, use) => {
        await use(new LandingPage(page))
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    forgetPasswordPage: async ({ page }, use) => {
        await use(new ForgetPasswordPage(page))
    },
    registerAccountPage: async ({ page }, use) => {
        await use(new RegisterAccountPage(page))
    },
    accountSuccesspage: async ({ page }, use) => {
        await use(new AccountSuccesspage(page))
    },
})

test.beforeEach(async ({ page }) => {
    await page.setViewportSize({
        width: 1920,
        height: 1080
    });
})

test.afterEach(async ({ }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
        const screenshot = testInfo.attachments.find(
            attachment =>
                attachment.name === "screenshot" &&
                attachment.path
        );
        if (screenshot?.path) {
            await allure.attachment(
                "Failure Screenshot",
                fs.readFileSync(screenshot.path),
                "image/png"
            );

        }

    }

});
export { expect };

