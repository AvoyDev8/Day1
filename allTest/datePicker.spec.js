import { test, expect } from "@playwright/test";

test("DatePicker handler", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const year = "2027";
  const month = "August";
  const date = "25";
  (await page.waitForSelector("#datepicker")).click();
  // await page.locator('#datepicker').click();
  const prevbtn = page.locator('//a[@data-handler="prev"]');
  const nextbtn = page.locator('//a[@data-handler="next"]');

  //lets try to handle dates
  while (true) {
    const current_year = await page
      .locator(".ui-datepicker-year")
      .textContent();
    const current_month = await page
      .locator(".ui-datepicker-month")
      .textContent();

    if (current_year == year && current_month == month) {
      break;
    } else if (year >= current_year || month > current_month) {
      await page.locator('//a[@data-handler="next"]').click();
    } else {
      await page.locator('//a[@data-handler="prev"]').click();
    }
    // const prevbtn= page.locator('//a[@data-handler="prev"]');
    // const nextbtn= page.locator('//a[@data-handler="next"]');
  }

  const allDates = await page.$$('//a[@class="ui-state-default"]');

  for (const dt of allDates) {
    if ((await dt.textContent()) == date) {
      await dt.click();
      break;
    }
  }

  await page.waitForTimeout(7000);
});
