import { test, expect } from "@playwright/test";

test("Perform double click ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const mybtn = await page.locator("#HTML10 div button");
  await mybtn.dblclick();

  await page.waitForTimeout(6000);
});

test("Drag and drop functionality", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const source = await page.locator("#draggable");
  const destination = await page.locator("#droppable");

  source.dragTo(destination);

  await page.waitForTimeout(5000);
});

test.only("Keyboard action: - ", async ({ page }) => {
  await page.goto("https://www.diffchecker.com/");
  if (
    await page.waitForSelector("//div[@class='modal_container__AUFqc']/button")
  ) {
    await page.locator("//div[@class='modal_container__AUFqc']/button").click();
  }
  await page.locator("//div[@aria-label='Original text input']").fill("Hello! this is avoy");
  await page.keyboard.press('Control+A');
  await page.keyboard.press("Control+C");
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");
  await page.keyboard.down("Tab");
  await page.keyboard.up("Tab");
  ////div[@aria-label='Changed text input']
//   await page.locator("div[@aria-label='Changed text input']").click();
  await page.keyboard.press("Control+V");

  await page.waitForTimeout(10000);
});
