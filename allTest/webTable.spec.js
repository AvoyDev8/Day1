import { test, expect } from "@playwright/test";

test("webTable handle", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = await page.locator("#productTable");
  console.log(await table);
  const column = await table.locator("thead tr th");
  console.log("tolal column = " + (await column.count()));
  const row = await table.locator("tbody tr");
  console.log("row =" + (await row.count()));

  //select the check box of the product 3

  // const perticular_row=row.filter({
  //     has: await page.locator("td"),
  //     hasText: "Product 3"
  // })
  // await perticular_row.locator("input").check();

  //select mulitple items
  //   await selectRow(page,row,"Product 3");
  //   await selectRow(page,row,"Product 1");
  //   await selectRow(page,row,"Product 5");

  //print all data from the page table
  //   for(let i=0;i< await row.count();i++){

  //     const nth_row=await row.nth(i);
  //     const cellValue=nth_row.locator('td');
  //     for(let j=0;j<await cellValue.count()-1;j++){
  //         console.log(await cellValue.nth(j).textContent());
  //     }
  //     console.log("\n");
  //   }

  //multiple page handle ..
  const totalPage = await page.locator("//ul[@id='pagination']/li");
  for (let k = 0; k < (await totalPage.count()); k++) {
    // let paginationValue = await totalPage.nth(k).click();
    //console.log(await totalPage.nth(k).textContent());
    if (k > 0) {
      await totalPage.nth(k).click();
    }
    for (let i = 0; i < (await row.count()); i++) {
      const rownum = await row.nth(i);
      const rowval = await rownum.locator("td");
      for (let j = 0; j < (await rowval.count()); j++) {
        console.log("==>" + (await rowval.nth(j).textContent()));
      }
    }
  }
});

async function selectRow(page, row, name) {
  const perticular_row = row.filter({
    has: await page.locator("td"),
    hasText: name,
  });
  await perticular_row.locator("input").check();
}
