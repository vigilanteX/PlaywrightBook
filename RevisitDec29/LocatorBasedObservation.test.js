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
//isEditable() is specifically designed for input fields (like <input>, <textarea>, or elements with contenteditable="true")
/*
State,isVisible(),isEnabled(),isEditable()
Normal Input,✅,✅,✅
Disabled Input,✅,❌,❌
Read-only Input,✅,✅,❌
Enabled Button,✅,✅,❌
Hidden Input,❌,✅,❌
*/
//If you call isEditable() on a <div> or <span> that doesn't have the contenteditable attribute,
//it will return false, even if the element is visible and enabled.
//FYI-contenteditable attribute is a global HTML attribute that allows you to turn almost any standard HTML element (like a <div>, <p>, or <h1>) into an editable text area.
test("locator.isEditable()", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  console.log(
    await page.locator("(//label[contains(text(),'4')])[1]/input").isEditable(),
    await page.locator("(//label[contains(text(),'4')])[2]/input").isEditable()
  );
});
