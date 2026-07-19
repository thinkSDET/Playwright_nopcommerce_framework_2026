import {expect, test} from '@playwright/test'
import { LandingPage } from '../../src/pages/landingPage/LandingPage'
import landingPageData from "../../src/testData/expectedData/landingPage.json";

test("TC_01_Verify application launches successfully",async({page})=>{
    const landingPage = new LandingPage(page)
    await landingPage.navigateToLandingPage()
    expect(await landingPage.getPageTitle()).toBe(landingPageData.pageTitle)
    expect(await landingPage.getCopyrightText()).toBe(landingPageData.copyrightText)
})