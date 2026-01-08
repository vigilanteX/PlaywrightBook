// Method,Best For,Supports Regex?
// toHaveAttribute,"src, href, data-testid, title",Yes
// toHaveClass,"CSS classes, state classes (e.g., .active)",Yes
// toHaveCSS,"Computed styles (color, margin, display)",Yes
// toHaveId,Verifying unique element identifiers,Yes
import { test, expect } from "@playwright/test";

test.skip("toHaveAttribute()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#myspantextarea")).toHaveAttribute(
    "contenteditable",
    "true"
  );
  await expect(page.locator("#disabledip")).toHaveAttribute("disabled");
});

test.skip("toHaveCSS()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#w0h0")).toHaveCSS("width", "0px");
});
test.skip("toHaveClass()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator("#myspantextarea")).toHaveClass("editor-container");
});
test("toHaveId()", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan07/Demo02AutoWaitEnabledAssertions/demo.html"
  );
  await expect(page.locator(`[style="visibility: hidden"]`)).toHaveId(
    "visibilityhiddengreet"
  );
});
