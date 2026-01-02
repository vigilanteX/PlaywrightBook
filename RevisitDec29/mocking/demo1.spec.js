import { test } from "@playwright/test";

test("mock request", async function ({ page }) {
  await page.goto("http://127.0.0.1:5500/RevisitDec29/mocking/index.html");
  await page.route("**/playwrightserver", async function (r) {
    const req = r.request();
    console.log(await req.allHeaders());
    let body = JSON.parse(await req.postData());
    body = { userid: 123456789, ...body };
    console.log(body);
    await r.continue({ postData: body });
  });

  await page.locator("#callApiBtn").click();
});
