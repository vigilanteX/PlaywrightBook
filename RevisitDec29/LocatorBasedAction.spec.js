import { test } from "@playwright/test";

test("autowait locators locator.click()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  await page.click("//p[contains(text(),'Alert')]/button");
});
