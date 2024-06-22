import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('https://www.saucedemo.com/'); // Await the page navigation
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password','secret_sauce');
    await page.click('#login-button');
    //page.lo
});

test.afterEach(async () => {
    // await page.waitForTimeout(5000);
    await page.close();
});

test('Tc 01 Verify the home page url and App title', async () => {
    console.log('Test: Verify the home page url and App title');
    console.log('Page URL: ' + (await page.url())); // Await the page URL retrieval
    expect(await page.url()).toBe("https://www.saucedemo.com/inventory.html");
    expect(await page.locator('//div[text()="Swag Labs"]').innerText()).toBe("Swag Labs");
});

test('Tc 02 Verify the add to car functionality', async () => {
    console.log('Test: Tc 02 Verify the add to car functionality');
    await page.click('#add-to-cart-sauce-labs-backpack');
    await page.click('#shopping_cart_container a');
    await page.click('#checkout');
    await page.fill('#first-name','Test akr');
    await page.fill('#last-name','UIPL');
    await page.fill('#postal-code','848506');
    await page.click('#continue');
    // expect(await page.locator('//div[@class="summary_total_label"]')).innerText()).toBe("Total: $32.39");
    // page.waitForSelector('//*[@id="checkout_summary_container"]/div/div[2]/div[8]');
    expect(await page.locator('.summary_total_label').innerText()).toBe("Total: $32.39");

});

