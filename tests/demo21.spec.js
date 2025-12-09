import { test, expect } from "@playwright/test";

test("demo21 test", async ({ page }) => {
  let locator = "//h2[text()='Single Checkbox Demo']";
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/checkbox-demo"
  );
  let text = await page.locator(locator).textContent();
  //await expect(text).toEqual("Single Checkbox Demos");
  await expect.soft(text).toEqual("Single Checkbox Demo");

  let elements = page
    .locator("//h2[contains(text(),'Disabled')]/../div/label")
    .filter({ hasNot: page.locator("//input[@disabled]") });
  let count = await elements.count();
  //console.log(await elements.count());
  for (let i = 0; i < count; i++) {
    let elementText = await elements.nth(i).textContent();
    console.log(elementText);
  }
});
