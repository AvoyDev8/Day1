import {test,expect} from '@playwright/test'

test("Tc_01", async ({page})=>{
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");
    
    await page.locator('.multiselect').click();
    const options=await page.$$("//ul/li");
    options.map(e=>console.log(e.textContent()));
    for(let option of options){

        let value=await option.textContent();
        console.log("value = ",value);
        if(value.includes("Java") || value.includes("Angular")){
            option.click();
        }
    }
    await page.waitForTimeout(8000);
})