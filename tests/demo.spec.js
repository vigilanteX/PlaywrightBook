//import test and expect from playwright module
const {test, expect} = require('@playwright/test');

test('dmo test', async function({page})
{
    await page.goto('https://ecommerce-playground.lambdatest.io/')

})