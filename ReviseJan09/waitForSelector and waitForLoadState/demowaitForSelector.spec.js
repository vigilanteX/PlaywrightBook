import { test } from "@playwright/test";

test("waitForSelector", async function ({ page }) {
  await page.goto(
    "http://127.0.0.1:5500/ReviseJan09/waitForSelector%20and%20waitForLoadState/index3.html"
  );
  await page.waitForSelector("#dynamicH1", { state: "hidden" });
  await page.click("#attachBtn");
  await page.waitForSelector("#dynamicH1", { state: "attached" });
  await page.waitForSelector("#dynamicH1", { state: "visible" });
  await page.click("#detachBtn");
  await page.waitForSelector("#dynamicH1", { state: "detached" });
});
