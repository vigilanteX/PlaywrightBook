import { test } from "@playwright/test";

test("test attach", async function ({ page }, testInfo) {
  await page.goto("https://google.com");
  const ss = await page.screenshot();
  testInfo.attach("customname", {
    body: ss,
    contentType: "image/png",
  });
});
