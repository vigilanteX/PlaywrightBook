import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  console.log("This is before each hook");
});
test("TEST CASE OUTSIDE 1", async ({ page }) => {
  console.log("TEST CASE OUTSIDE 1 EXECUTED");
});
test("TEST CASE OUTSIDE 2", async ({ page }) => {
  console.log("TEST CASE OUTSIDE 2 EXECUTED");
});
test.afterEach(async ({ page }) => {
  console.log("This is after each hook");
});
