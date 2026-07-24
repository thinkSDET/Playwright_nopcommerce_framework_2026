import { Locator, Page } from '@playwright/test'
import { Basepage } from '../../basePage/basePage';

export class LandingPage extends Basepage {

    private readonly footerCopyright: Locator
    private readonly myAccount: Locator
    private readonly register: Locator
    private readonly login: Locator

    constructor(page: Page) {
        super(page)
        this.footerCopyright = page.locator("//footer//p")
        this.myAccount = page.locator("//a[@title='My Account']//span[text()='My Account']")
        this.register = page.locator('//a[text()="Register"]')
        this.login = page.locator('//a[text()="Login"]')
    }
    async navigateToLandingPage() {
        await this.goToUrl('')
    }
    async getPageTitle() {
        return await this.page.title()
    }

    async getCopyrightText() {
        return this.getNormalizedText(this.footerCopyright)
    }

    async navigateToLoginPage() {
        await this.myAccount.click();
        await this.login.click();
    }
    async navigateToRegisterPage() {
        await this.myAccount.click();
        await this.register.click();
    }
}

