import { test } from "@playwright/test";

test("about test", async function ({ page }, testInfo) {
  console.log(testInfo.title);
});
test("test1", async function ({ page }) {
  console.log("test1 executed");
});
test("test2", async function ({ page }) {
  console.log("test2 executed");
});
test("test3", async function ({ page }) {
  console.log("test3 executed");
});
