import { Locator, Page } from "@playwright/test";
import { Basepage } from "../../basePage/basePage";

export class LoginPage extends Basepage {
    private readonly inputEmailAddress: Locator
    private readonly inputPassword: Locator
    private readonly loginButton: Locator
    private readonly forgetPasswordLink: Locator
    private readonly warningMessage:Locator

    constructor(page: Page) {
        super(page)
        this.inputEmailAddress = page.locator("input#input-email")
        this.inputPassword = page.locator("input#input-password")
        this.loginButton = page.locator("//input[@value='Login']")
        this.forgetPasswordLink = page.locator("//form//a[text()='Forgotten Password']")
        this.warningMessage = page.locator("//div[@class='alert alert-danger alert-dismissible']")
    }
    
    async submitLogin(emailAddress: string, password: string) {
        await this.inputEmailAddress.fill(emailAddress);
        await this.inputPassword.fill(password);
        await this.loginButton.click();
    }
    async getWarnigMessage(){
       return await this.getNormalizedText(this.warningMessage)
    }
}