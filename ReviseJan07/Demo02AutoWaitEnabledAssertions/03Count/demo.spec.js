import { expect, test } from "@playwright/test";

test("expect(locator).toHaveCount(number)", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("h1")).toHaveCount(5);
});
