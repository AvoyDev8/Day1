import { test, expect, chromium } from "@playwright/test";

test("Handle multiple pages", async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto("https://google.com");
  await page2.goto("https://yahoo.in")
  await page2.waitForTimeout(3000);
});

test.only("Handle multiple windows ",async()=>{
    const browser=await chromium.launch();
    const context= await browser.newContext();
    const page= await context.newPage();

    await page.goto("https://clirnet.com");
    expect(page).toHaveTitle("CLIRNET – Global largest digital LIVE CME platform!");

    const pagePromise=context.waitForEvent('page');
    await page.click("//a[normalize-space()='Sign in']");

    const newPage=await pagePromise;
    expect(newPage).toHaveTitle("CLIRNET - Login");

    await newPage.waitForTimeout(3000);

})
