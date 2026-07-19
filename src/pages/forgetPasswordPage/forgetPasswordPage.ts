import { Locator, Page } from "@playwright/test";
import { Basepage } from "../../basePage/basePage";

export class ForgetPasswordPage extends Basepage {
    private readonly inputEmailAddress: Locator
    private readonly continueButton: Locator
    private readonly warningMessage:Locator

    constructor(page: Page) {
        super(page)
        this.inputEmailAddress = page.locator("input#input-email")
        this.continueButton = page.locator("//input[@value='Continue']")
        this.warningMessage = page.locator("//div[@class='alert alert-danger alert-dismissible']")
    }

    async submitForgetEmailAddress(email:string){
        this.inputEmailAddress.fill(email)
        this.continueButton.click()
    }

     async getWarnigMessage(){
       return await this.getNormalizedText(this.warningMessage)
    }
}