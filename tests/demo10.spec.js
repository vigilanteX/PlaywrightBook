import { test, expect } from "@playwright/test";

test("Demo Test 10", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/drag-and-drop-demo"
  );
  //   let element = await page.getByText("Draggable 1");
  //   let finalElement = await page.locator("#mydropzone");

  //   await element.dragTo(finalElement);
  //   await page.waitForTimeout(5000);

  //   let elements = page.locator("span[draggable='true']");
  //   let count = await elements.count();
  //   let finalElement = await page.locator("#mydropzone");
  //   console.log(await elements.count());
  //   for (let i = 0; i < count; i++) {
  //     let element = elements.nth(0);
  //     await element.dragTo(finalElement);
  //   }
  //   await page.waitForTimeout(5000);
});
