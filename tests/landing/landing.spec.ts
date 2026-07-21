import {test,expect} from '../../src/fixtures/testFixture'
import landingPageData from "../../src/testData/expectedData/landingPage.json";
import * as allure from "allure-js-commons";

test("TC_01 - Verify application launches successfully",async({landingPage})=>{
    await allure.owner("thinkSDET")
    await landingPage.navigateToLandingPage()
    expect(await landingPage.getPageTitle()).toBe(landingPageData.pageTitle)
    expect(await landingPage.getCopyrightText()).toBe(landingPageData.copyrightText)
})