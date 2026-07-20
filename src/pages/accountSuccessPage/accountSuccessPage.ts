import { Locator, Page } from "@playwright/test";
import { Basepage } from "../../basePage/basePage";

export class AccountSuccesspage extends Basepage {

    private readonly accountCreationSuccessMessage: Locator


    constructor(page: Page) {
        super(page)
        this.accountCreationSuccessMessage = page.locator("//div[@id='content']//h1")

    }

    async getAccountCreatedHeading() {
        return await this.accountCreationSuccessMessage.innerText()
    }
}