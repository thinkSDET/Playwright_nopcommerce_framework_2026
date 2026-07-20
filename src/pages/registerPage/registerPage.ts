import { Locator, Page } from "@playwright/test";
import { Basepage } from "../../basePage/basePage";

export class RegisterAccountPage extends Basepage {

    private readonly firstName: Locator
    private readonly lastName: Locator
    private readonly emailAddress: Locator
    private readonly telephoneNumber: Locator
    private readonly password: Locator
    private readonly confirmPassword: Locator
    private readonly newsletterYes: Locator
    private readonly newsletterNo: Locator
    private readonly privacyPolicyCheckBox: Locator
    private readonly privacyPolicyLink: Locator
    private readonly continueButton: Locator

    constructor(page: Page) {
        super(page)
        this.firstName = page.locator("input#input-firstname")
        this.lastName = page.locator("input#input-lastname")
        this.emailAddress = page.locator("input#input-email")
        this.telephoneNumber = page.locator("input#input-telephone")
        this.password = page.locator("input#input-password")
        this.confirmPassword = page.locator("input#input-confirm")
        this.newsletterYes = this.page.locator("input[name='newsletter'][value='1']");
        this.newsletterNo = this.page.locator("input[name='newsletter'][value='0']");
        this.privacyPolicyCheckBox = page.locator("//input[@type='checkbox']")
        this.privacyPolicyLink = page.locator("//a[@class='agree']/b")
        this.continueButton = page.locator("//input[@type='submit']")
    }

    private async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName)
    }

    private async enterLastName(lastName: string) {
        await this.lastName.fill(lastName)
    }

    private async enterEmailAddress(email: string) {
        await this.emailAddress.fill(email)
    }

    private async enterTelephoneNumber(number: string) {
        await this.telephoneNumber.fill(number)
    }

    private async enterPassword(password: string) {
        await this.password.fill(password)
    }

    private async enterConfirmPassword(password: string) {
        await this.confirmPassword.fill(password)
    }

     async acceptPrivacyPolicy() {
        await this.privacyPolicyCheckBox.click()
    }

     async clickContinue() {
        await this.continueButton.click()
    }

    async fillMandatoryRegistrationDetails(data:any) {
    await this.enterFirstName(data.firstName);
    await this.enterLastName(data.lastName);
    await this.enterEmailAddress(data.emailAddress);
    await this.enterTelephoneNumber(data.telephoneNumber);
    await this.enterPassword(data.password);
    await this.enterConfirmPassword(data.password);
    await this.page.waitForTimeout(4000)
}
}