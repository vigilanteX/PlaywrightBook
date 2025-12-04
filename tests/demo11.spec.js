import { expect, test } from "@playwright/test";

test("demo11 test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/upload-file-demo"
  );
  await page.setInputFiles("#file", "./buriburi.jpg");
  await page.waitForTimeout(8000);
});
