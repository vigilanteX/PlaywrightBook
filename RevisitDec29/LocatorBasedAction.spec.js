import { test } from "@playwright/test";

test.skip("autowait locators locator.click()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
  );
  await page.click("//p[contains(text(),'Alert')]/button");
});

test("locator.dblclick()", async function ({ page }) {
  await page.goto("https://doubleclicktest.com/");
  await page.dblclick("//b[text()='Click Here to Test']");
  await page.waitForTimeout(4000);
});
