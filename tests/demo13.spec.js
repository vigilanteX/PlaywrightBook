import { test, expect } from "@playwright/test";

test("demo13 test", async ({ page }) => {
  await page.goto(
    "https://www.lambdatest.com/selenium-playground/iframe-demo/"
  );
  await page.frameLocator("#iFrame1").getByText("Your content.").fill("aman");
  await page.waitForTimeout(3000);
});
