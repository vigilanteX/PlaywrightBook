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
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    // await page.getByPlaceholder('E-Mail Address').fill('bobatea')
    // await page.waitForTimeout(2000);

    //getByAltText will search with alt attribute value of img
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    // await page.getByAltText('naveenopencart').click()
    // await page.waitForTimeout(2000);

    //getByTitle will search with title attribute value of any element
    // await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    // await page.getByTitle('naveenopencart').click()
    // await page.waitForTimeout(2000);

    //getByTestId will search with data-testid attribute value of any element
    //by default testIdAttribute is data-testid but we have changed it to id in config file
    //to change got to playwright.config.js and modify testIdAttribute value to required attribute name
    //in this case we have changed it to id
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
    await page.getByTestId('input-email').fill('bobatea')
    await page.waitForTimeout(2000);



     

})