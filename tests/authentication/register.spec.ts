import { test, expect } from "../../src/fixtures/testFixture";
import registerPageExpectedData from "../../src/testdata/expectedData/registerPage.json"
import { RegisterDataFactory } from "../../src/testdata/testDataFactory/RegisterDataFactory";

test("TC_001 - Verify user can successfully register with valid mandatory details", async ({
    landingPage,
    registerAccountPage, accountSuccesspage
}) => {
    await landingPage.navigateToLandingPage()
    await landingPage.navigateToRegisterPage()
    await registerAccountPage.fillMandatoryRegistrationDetails(RegisterDataFactory.validRegistration())
    await registerAccountPage.acceptPrivacyPolicy();
    await registerAccountPage.clickContinue();
    expect(await accountSuccesspage.getAccountCreatedHeading()).toBe(registerPageExpectedData.accountSuccessfullyCreatedHeading);
});

test("TC_002 - Verify validation messages are displayed when submitting the registration form with all mandatory fields left blank", async ({
    landingPage,
    registerAccountPage
}) => {
    await landingPage.navigateToLandingPage();
    await landingPage.navigateToRegisterPage();
    await registerAccountPage.clickContinue();
    const validationMessages = await registerAccountPage.getValidationMessages();
    expect(validationMessages.firstName).toBe(registerPageExpectedData.mandatoryFieldValidations[0].firstNameValidation);
    expect(validationMessages.lastName).toBe(registerPageExpectedData.mandatoryFieldValidations[0].lastNameValidation);
    expect(validationMessages.email).toBe(registerPageExpectedData.mandatoryFieldValidations[0].emailValidation);
    expect(validationMessages.telephone).toBe(registerPageExpectedData.mandatoryFieldValidations[0].telephoneValidation);
    expect(validationMessages.password).toBe(registerPageExpectedData.mandatoryFieldValidations[0].passwordValidation);
    expect(validationMessages.privacyPolicy).toBe(registerPageExpectedData.mandatoryFieldValidations[0].privacyPolicyWarning);

});
