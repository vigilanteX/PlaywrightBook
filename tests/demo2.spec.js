import {test,expect} from '@playwright/test';
test('demo 2 test',async function({page})
{
    await page.goto('https://google.com');
    await page.waitForTimeout(5000);

})