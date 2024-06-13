import {test,expect} from "@playwright/test"

test("Tc001 Gmail login", async({page})=>{

    await page.goto("https://gmail.com");
    await page.locator('//input[@type="email"]').fill('aroyavoy2@gmail.com');
    await page.locator('//input[@type="password"]').fill('123456789')
})