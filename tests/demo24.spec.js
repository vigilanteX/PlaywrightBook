import { test } from "@playwright/test";

test.describe("demo24 suite", () => {
  test.beforeAll(async () => {
    console.log("Before all tests in demo24.spec.js");
  });
  test.afterAll(async () => {
    console.log("After all tests in demo24.spec.js");
  });
  test.beforeEach(async () => {
    console.log("Before each test in demo24.spec.js");
  });
  test.afterEach(async () => {
    console.log("After each test in demo24.spec.js");
  });

  test("demo22 test", async ({ page }) => {
    console.log("demo22 test");
  });

  test("demo221 test", async ({ page }) => {
    console.log("demo221 test");
  });

  test("demo223 test", async ({ page }) => {
    console.log("demo223 test");
  });
});
