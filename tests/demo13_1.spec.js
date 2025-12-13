import { test } from "@playwright/test";
test("popup", async function ({ page }) {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/window-popup-modal-demo"
  );
  const [pop] = await Promise.all([
    page.waitForEvent("popup"),
    page.locator("(//a[contains(@href,'twitt')])[1]").click(),
  ]);
  await pop.waitForLoadState();
  console.log(await pop.title());
  //await page.waitForTimeout(5000);
});
