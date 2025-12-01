//import test and expect from playwright module
const {test, expect} = require('@playwright/test');

test('dmo test', async function({page})
{
    await page.goto('https://ecommerce-playground.lambdatest.io/')
    await page.locator('span.title',{hasText:'Mega Menu'}).hover()
    await page.locator("a[title='Desktop']").click()
    await page.waitForTimeout(5000)
    let isVisible= await page.locator("//h1[text()='Desktops']").isVisible()
    console.log(isVisible)


})