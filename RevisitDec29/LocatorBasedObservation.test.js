import { test } from "@playwright/test";
test("locator.isVisible()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  console.log(
    await page.locator("//label[text()='Click on check box']").isVisible()
  );
  await page.waitForTimeout(4000);
});
