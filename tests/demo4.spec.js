import {expect, test} from '@playwright/test';

test('demo4 test', async ({page}) => {
    await page.goto('http://127.0.0.1:5500/index.html');
    await page.waitForTimeout(2000);

    //getByRole with exact match vs without exact match
    //case1: get by role with exact match will select the exact matching element
     await page.getByRole('button',{name:'Get Sum',exact:true});
    //case2: get by role without exact match will select all matching elements matching the name partially
     await page.getByRole('button',{name:'Get Sum',exact:true});
     

})