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
//An element is considered enabled if it does not have a disabled attribute. This applies to elements like <button>, <input>, <select>, and <textarea>
test("locator.isEnabled()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  console.log(
    await page.locator("(//label[contains(text(),'4')])[1]/input").isEnabled(),
    await page.locator("(//label[contains(text(),'2')])[1]/input").isEnabled()
  );
});
