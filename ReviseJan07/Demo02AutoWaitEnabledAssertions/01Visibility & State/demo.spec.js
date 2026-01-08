import { expect, test } from "@playwright/test";

test.skip("await expect(locator).toBeVisible()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await page.waitForTimeout(5000);
  //width0 height0 fails
  //await expect(page.locator("#w0h0")).toBeVisible();
  //display:none fails
  //await expect(page.locator("#displaynonegreet")).toBeVisible();
  //visibility:hidden
  //await expect(page.locator("visibilityhiddengreet")).toBeVisible();
  await expect(page.locator("#greet")).toBeVisible();
});

test.skip("await expect(locator).toBeHidden()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await page.waitForTimeout(5000);
  await expect(page.locator("#displaynonegreet")).toBeHidden();
  await expect(page.locator("#visibilityhiddengreet")).toBeHidden();
  await expect(page.locator("#w0h0")).toBeHidden();
  await expect(page.locator("#"))
});

test.skip("await expect(locator).toBeEnabled()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#enabledip")).toBeEnabled();
});
test.skip("await expect(locator).toBeDisabled()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#disabledip")).toBeDisabled();
  await expect(page.locator("#ariadisabledip")).toBeDisabled();
});

test.skip("await expect(locator).toBeEditable()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#mytextarea")).toBeEditable();
  // await expect(page.locator("#mydivtextarea")).toBeEditable();
  // await expect(page.locator("#myspantextarea")).toBeEditable();
  //await expect(page.locator("#disabledip")).toBeEditable();
  //await expect(page.locator("#ariadisabledip")).toBeEditable();
  //await expect(page.locator("#readonlyip")).toBeEditable();
});

test.skip("await expect(locator).toBeChecked()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("[value='male']")).toBeChecked();
  await expect(page.locator("[value='reading']")).toBeChecked();
});
