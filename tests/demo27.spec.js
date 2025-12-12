import { test } from "@playwright/test";

test("mocking", async function ({ page }) {
  await page.route("*/**/PlaywrightPOST", async function (routemanual) {
    console.log("found");
    if (routemanual.request().method() === "POST") {
      console.log("post");
      const json = { name: "meow dixit" };
      await routemanual.fulfill({ body: JSON.stringify(json) });
    }

    await page.unrouteAll({ behavior: "ignoreErrors" });
  });

  await page.goto("http://127.0.0.1:5500/website/index.html");
  await page.click("#call");
  await page.waitForTimeout(8000);
});
