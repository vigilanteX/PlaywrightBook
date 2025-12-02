import {test, expect} from '@playwright/test';

test('test3',async function({page})
{
    await page.goto('https://www.lambdatest.com/selenium-playground/simple-form-demo')
    await page.locator('input#sum1').fill('10')
})