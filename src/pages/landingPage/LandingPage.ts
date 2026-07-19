import { Locator, Page } from '@playwright/test'
import { Basepage } from '../../basePage/basePage';

export class LandingPage extends Basepage {

    private readonly footerCopyright: Locator

    constructor(page: Page) {
        super(page)
        this.footerCopyright = page.locator("//footer//p")
    }

    async navigateToLandingPage() {
        await this.page.goto("https://naveenautomationlabs.com/opencart/");
    }

    async getPageTitle() {
        return await this.page.title()
    }

    async getCopyrightText() {
       return this.getNormalizedText(this.footerCopyright)
    }
}

