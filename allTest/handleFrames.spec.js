import {test} from "@playwright/test"

test("Handling of frames = ", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    //Approach 1
    const allFrames=await page.frame({url: 'https://fs24.formsite.com/res/showFormEmbed?EParam=m_OmK8apOTDpwCqUlfXbL2rYe2Y6sJfY&796456169&EmbedId=796456169'});
    await allFrames.fill("#RESULT_TextField-0","avoy roy");
    //console.log("all frame = ",allFrames);

    //Approach 2

    await page.frameLocator("#frame-one796456169").locator("//div[@id='q2']/table/tbody/tr[1]/td/label").click();



    await page.waitForTimeout(6000);
})