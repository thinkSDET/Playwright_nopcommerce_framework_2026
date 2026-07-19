import { Page, Locator } from "@playwright/test";

export class Basepage {

    protected readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    
    protected async getNormalizedText(locator: Locator): Promise<string> {
        return (await locator.innerText()).replace(/\s+/g, " ").trim()
    }
}