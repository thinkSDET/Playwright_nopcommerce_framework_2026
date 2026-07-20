import { test, expect } from "../../src/fixtures/testFixture";
import registerPageExpectedData from "../../src/testdata/expectedData/registerPage.json"
import { RegisterDataFactory } from "../../src/testdata/testDataFactory/RegisterDataFactory";

test("TC_REG_001 - Verify user can successfully register with valid mandatory details", async ({
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

test("TC_REG_002 - Verify validation messages are displayed when submitting the registration form with all mandatory fields left blank", async ({
    landingPage,
    registerAccountPage
}) => {
    await landingPage.navigateToLandingPage();
    await landingPage.navigateToRegisterPage();
    await registerAccountPage.clickContinue();
});

test("TC_REG_003 - Verify validation messages are displayed for invalid registration data", async ({
    landingPage,
    registerAccountPage
}) => {

});

test("TC_REG_004 - Verify user cannot register with an email address that is already registered", async ({
    landingPage,
    registerAccountPage
}) => {

});

test("TC_REG_005 - Verify registration behavior with optional fields and user preferences", async ({
    landingPage,
    registerAccountPage
}) => {

});
