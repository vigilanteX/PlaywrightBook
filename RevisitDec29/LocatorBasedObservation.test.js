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

test("locator.isHidden()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  console.log(await page.locator("//label[text()='meow']").isHidden());
  await page.waitForTimeout(4000);
});

test("locator.isChecked()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  await page.locator("//label[text()='Click on check box']/input").check();
  await page.waitForTimeout(4000);
  console.log(
    await page.locator("//label[text()='Click on check box']/input").isChecked()
  );
  await page.waitForTimeout(4000);
  await page.locator("//label[text()='Click on check box']/input").uncheck();
  console.log(
    await page.locator("//label[text()='Click on check box']/input").isChecked()
  );
  await page.waitForTimeout(4000);
});
