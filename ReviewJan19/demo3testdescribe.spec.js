import { test } from "@playwright/test";

// test.describe("TEST GROUP DESCRIBE 1", function () {
//   test("TEST CASE 1", async ({ page }) => {
//     console.log("TEST CASE 1 EXECUTED");
//   });

//   test("TEST CASE 2", async ({ page }) => {
//     console.log("TEST CASE 2 EXECUTED");
//   });
// });

//test.describe.only runs only that describe block and ignores others
// test.describe.only("TEST GROUP 2 DESCRIBE", function () {
//   test("TEST CASE 3", async ({ page }) => {
//     console.log("TEST CASE 3 EXECUTED");
//   });

//   test("TEST CASE 4", async ({ page }) => {
//     console.log("TEST CASE 4 EXECUTED");
//   });
// });

//below test is ignored in case of test.describe.only but will run in case of test.describe
// test("TEST CASE OUTSIDE DESCRIBE", async ({ page }) => {
//   console.log("TEST CASE OUTSIDE DESCRIBE EXECUTED");
// });

//test.describe.parallel to run tests inside describe block in parallel
// test.describe.parallel("TEST GROUP DESCRIBE", function () {
//   test("TEST CASE 5", async ({ page }) => {
//     await page.waitForTimeout(5000);
//     console.log("TEST CASE 5 EXECUTED");
//   });

//   test("TEST CASE 6", async ({ page }) => {
//     await page.waitForTimeout(5000);
//     console.log("TEST CASE 6 EXECUTED");
//   });
//   test("TEST CASE 7", async ({ page }) => {
//     await page.waitForTimeout(5000);
//     console.log("TEST CASE 7 EXECUTED");
//   });

//   test("TEST CASE 8", async ({ page }) => {
//     await page.waitForTimeout(5000);
//     console.log("TEST CASE 8 EXECUTED");
//   });
// });

//test.describe.serial to run tests inside describe block serially
// test.describe.serial("TEST GROUP DESCRIBE", function () {
//   test("TEST CASE 5", async ({ page }) => {
//     await page.waitForTimeout(5000);
//     console.log("TEST CASE 5 EXECUTED");
//   });

//   test("TEST CASE 6", async ({ page }) => {
//     await page.waitForTimeout(5000);
//     console.log("TEST CASE 6 EXECUTED");
//   });
//   test("TEST CASE 7", async ({ page }) => {
//     await page.waitForTimeout(5000);
//     console.log("TEST CASE 7 EXECUTED");
//   });

//   test("TEST CASE 8", async ({ page }) => {
//     await page.waitForTimeout(5000);
//     console.log("TEST CASE 8 EXECUTED");
//   });
// });

test("TEST CASE OUTSIDE 1", async ({ page }) => {
  console.log("TEST CASE OUTSIDE 1 EXECUTED");
});
test("TEST CASE OUTSIDE 2", async ({ page }) => {
  console.log("TEST CASE OUTSIDE 2 EXECUTED");
});
test("TEST CASE OUTSIDE 3", async ({ page }) => {
  console.log("TEST CASE OUTSIDE 3 EXECUTED");
});
