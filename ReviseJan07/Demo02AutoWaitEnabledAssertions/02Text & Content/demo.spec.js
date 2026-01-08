import { test, expect } from "@playwright/test";

test("toHaveText()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#greet")).toHaveText("Hello world");
});
test("toContainText()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#greet")).toContainText("Hello");
});
test("toHaveValue()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("[value='male']")).toHaveValue("male");
});
test("toHaveText() with inner html element hidden", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#demo-box")).toHaveText("Hello Secret World");
});
