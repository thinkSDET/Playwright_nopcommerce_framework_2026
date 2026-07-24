import { Page, Locator } from "@playwright/test";

export class Basepage {

    protected readonly page: Page
    constructor(page: Page) {
        this.page = page
    }
    
    protected async getNormalizedText(locator: Locator): Promise<string> {
        return (await locator.innerText()).replace(/\s+/g, " ").trim()
    }

    async goToUrl(url : string,description:string ="page"):Promise<void>{
        try{
          await this.page.goto(url,{waitUntil : "domcontentloaded"})
        } catch(error){
                throw new Error(`Failed to naigate to ${description} : ${url}`)
        }
    }

     async waitForVisible(locator: Locator, timeout: number = 10000): Promise<void> {
        try {
            await locator.waitFor({ state: "visible", timeout });
        } catch (error) {
            throw new Error(`${locator} was not visible within ${timeout}ms`);
        }
    }

    async waitForHidden(locator: Locator,timeout: number = 10000): Promise<void> {
        try {
            await locator.waitFor({ state: "hidden", timeout });
        } catch (error) {
            throw new Error(`${locator} did not disappear within ${timeout}ms`);
        }
    }
}