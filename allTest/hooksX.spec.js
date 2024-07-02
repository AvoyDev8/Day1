import { test, expect } from "@playwright/test";

let page;
test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();

  await page.goto("https://cqc-stg-fe.cqportal.com/frontend-app/login/iem");

  await page.click("//span[text()=' SAML Login ']/parent::*");
  await page.fill('//input[@name="email"]', "amrita123@yopmail.com");
  await page.click('//button[@type="submit"]');
  await page.fill('//input[@type="password"]', "Password@123");
  await page.click('//button[@type="submit"]');

  // test.page=await page;
});

test.afterEach(async () => {
  // page=test.page;
  await page.waitForSelector(
    "//div[@class='mat-mdc-menu-trigger user-profile-name']"
  );
  await page.click(
    "//div[@class='mat-mdc-menu-trigger user-profile-name']"
  );
  await page.click("//span[text()=' Logout ']/parent::button");
  await page.click("//span[text()='Logout']/parent::button");
  await page.close();
});

test("verify the welcome text", async () => {
  //const page=test.page;
  //await page.waitForTimeout(5000);
  const homePageTxt = await page.locator(
    "//h2[@class='head-title ng-star-inserted']"
  );
  expect(await homePageTxt).toContainText("Welcome to the CQportal!  ");
});

test("TC_02 Create Order request", async () => {
  // const page=test.page;
  await page.waitForSelector(
    "//span[text()=' Create Request ']/parent::button"
  );
  await page.click("//span[text()=' Create Request ']/parent::button");
  await page.click("//span[text()=' Translation Request ']/parent::button");
  await page.click("//span[text()=' Request Quote ']/parent::button");
  await page.waitForSelector("//h2[normalize-space()='Create Request']");
  const createPageTxt = await page.locator(
    "//h2[normalize-space()='Create Request']"
  );
  expect(await createPageTxt).toContainText(" Create Request ");
});

// test("my test", async ({ page }) => {
//   await page.goto("https://cqc-stg-fe.cqportal.com/frontend-app/login/iem");

//   await page.click(
//     "//span[text()=' SAML Login ']/parent::*"
//   );
//   await page.fill('//input[@name="email"]', "amrita123@yopmail.com");    10015 6452 446
//   await page.click('//button[@type="submit"]');
//   await page.fill('//input[@type="password"]', "Password@123");
//   await page.click('//button[@type="submit"]');
// //   const homePageTxt = await page.locator(
// //     "/html/body/app-root/app-dashboard/div/div/div[1]/div[1]/div/div/h2"
// //   );
// const homePageTxt=await page.locator("//h2")
//   expect(await homePageTxt).toContainText("Welcome to the CQportal!  ");
//   await page
//     .locator('//*[@id="main-header"]/div/div[2]/div[3]/div[2]/div[2]')
//     .click();
//   await page.click('//*[@id="mat-menu-panel-1"]/div/div/button[4]');
//   await page.close();
// });
