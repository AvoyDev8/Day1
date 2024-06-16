import { test, expect } from "@playwright/test";

test("Upload single file ", async ({ page }) => {
  await page.goto("https://www.foundit.in/web/en/home");
  await page
    .locator("//a[@class='btn block resume-btn btn-orange mt20']")
    .click();
  const uploadFile = await page.locator(
    "//div[@class='engage w100 fl tc engage-desktop']//div//div[@class='modal-mask']//div[@class='modal-container pr animated upload-resume-modal']//section[@class='modal-body']//div//input[@id='file-upload']"
  );
  await uploadFile.setInputFiles("D:/myLearning/Day1/testFile/111.txt");

  await page.waitForTimeout(6000);
});

test.only("Upload mulitple files", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
  await page
    .locator("#filesToUpload")
    .setInputFiles(["testFile\\111.txt", "testFile\\new uipl.txt"]);

  await page.waitForTimeout(5000);
});
