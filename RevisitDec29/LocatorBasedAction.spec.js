import { test } from "@playwright/test";

test.skip("autowait locators locator.click()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  await page.click("//p[contains(text(),'Alert')]/button");
});

test.skip("locator.dblclick()", async function ({ page }) {
  await page.goto("https://doubleclicktest.com/");
  await page.dblclick("//b[text()='Click Here to Test']");
  await page.waitForTimeout(4000);
});

test("locator.fill()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  await page
    .locator("[placeholder='Please enter your Message']")
    .fill("manual input");
  await page.waitForTimeout(4000);
});
test("locator.clear()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/simple-form-demo"
  );
  await page
    .locator("[placeholder='Please enter your Message']")
    .fill("manual input");
  await page.waitForTimeout(4000);
  await page.locator("[placeholder='Please enter your Message']").clear();
  await page.waitForTimeout(4000);
});

test("locator.press()", async function ({ page }) {
  await page.goto("https://www.onlinemictest.com/keyboard-test/");
  await page.waitForTimeout(4000);
  await page.locator("//strong[text()='light up']").press("Digit0");
  await page.waitForTimeout(4000);
});

test("locator.check()-checkbox", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  await page.locator("//label[text()='Click on check box']/input").check();
  await page.waitForTimeout(4000);
});
test("locator.uncheck()-checkbox", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  await page.locator("//label[text()='Click on check box']/input").check();
  await page.waitForTimeout(4000);
  await page.locator("//label[text()='Click on check box']/input").uncheck();
  await page.waitForTimeout(4000);
});
