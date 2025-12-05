import { test } from "@playwright/test";

test("demo18", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/shadow-dom");
  await page.getByPlaceholder("Name", { exact: true }).fill("LambdaTest");
  await page
    .getByPlaceholder("Email", { exact: true })
    .fill("LambdaTest@gmail.com");
  await page.waitForTimeout(5000);
});
