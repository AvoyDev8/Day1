import { test } from "@playwright/test";

test("mouse hover action ", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  const loginBtn = await page.locator("//div[@class='H6-NpN _3N4_BX']");
  const helpBtn = await page.locator("//div[@class='H6-NpN']/a");

  await loginBtn.hover();
  await page.waitForTimeout(5000);
  await helpBtn.hover();

  await page.waitForTimeout(5000);
});
