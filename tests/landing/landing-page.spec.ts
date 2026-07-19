import {expect, test} from '@playwright/test'
import { LandingPage } from '../../src/pages/landingPage/LandingPage'

test("TC_01_Verify application launches successfully",async({page})=>{
    const landingPage = new LandingPage(page)
    await landingPage.navigateToLandingPage()
    expect(await landingPage.getPageTitle()).toBe("Your Store")
    expect(await landingPage.getCopyrightText()).toBe(`Powered By OpenCart naveenopencart © 2026`)
})