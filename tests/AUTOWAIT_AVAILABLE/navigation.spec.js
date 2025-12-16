import { test } from "@playwright/test";

test("navigation test 1", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/input-form-demo"
  );
  await page.getByText("Login", { exact: true }).click();
  await page.waitForTimeout(4000);
  await page.goBack();
  await page.waitForTimeout(4000);
  await page.goForward();
  await page.waitForTimeout(4000);
  await page.reload();
  await page.waitForTimeout(4000);
});
