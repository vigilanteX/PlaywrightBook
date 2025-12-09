import { test } from "@playwright/test";

test("demo22 test", async ({ page }) => {
  console.log("demo22 test");
});

test("demo221 test", async ({ page }) => {
  console.log("demo221 test");
});

test("demo223 test", async ({ page }) => {
  console.log("demo223 test");
});

test.skip("demo224 test", async ({ page }) => {
  console.log("demo224 test");
});
test.fail("demo225 test", async ({ page }) => {
  throw new Error("Intentional failure");
});
test.fixme("demo226 test", async ({ page }) => {
  console.log("demo226 test");
});

test("demo227 test", async ({ page }) => {
  test.slow();
  await page.goto("https://yahoo.com");
  console.log("demo227 test");
});

test.describe("demo22 suite", () => {
  test("demo228 test", async ({ page }) => {
    console.log("demo228 test");
  });
  test("demo229 test", async ({ page }) => {
    console.log("demo229 test");
  });
});
