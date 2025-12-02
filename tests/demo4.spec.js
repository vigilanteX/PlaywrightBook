import {expect, test} from '@playwright/test';

test('demo4 test', async ({page}) => {
    // await page.goto('http://127.0.0.1:5500/index.html');
    // await page.waitForTimeout(2000);

    // //getByRole with exact match vs without exact match
    // //case1: get by role with exact match will select the exact matching element
    //  await page.getByRole('button',{name:'Get Sum',exact:true});
    // //case2: get by role without exact match will select all matching elements matching the name partially
    //  await page.getByRole('button',{name:'Get Sum'});

    
    //  //getByText with exact match vs without exact match
    // //case1: get by text with exact match will select the exact matching element
    //  const count=await page.getByText('Get Sum', {exact:true});
    // //case2: get by text without exact match will select all matching elements matching the text partially
    //  const count2=await page.getByText('Get Sum', {exact:false});
    //  console.log(await count.count(),await count2.count());


    //getByLabel will search with label text associated with the input field
    //search with <label>value</labe> value and this label is linked to some input field using for attribute which is usually id of i/p.
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    // await page.getByLabel('E-Mail Address').fill('bobatea')
    // await page.waitForTimeout(2000);




    //getByPlaceholder will search with placeholder attribute value of input field
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.getByPlaceholder('E-Mail Address').fill('bobatea')
    await page.waitForTimeout(2000);
     

})