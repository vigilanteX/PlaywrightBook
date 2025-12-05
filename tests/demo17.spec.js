import { test } from "@playwright/test";

test("demo15 test", async ({ context }) => {
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:5500/index3.html");

  const [google] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("//a[text()='Google']").click(),
  ]);
  await google.waitForLoadState();
  const [facebook] = await Promise.all([
    context.waitForEvent("page"),
    page.getByText("Facebook").click(),
  ]);
  await facebook.waitForLoadState();
  const [yahoo] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("text=Yahoo").click(),
  ]);
  await yahoo.waitForLoadState();
  console.log(await google.title());
  console.log(await facebook.title());
  console.log(await yahoo.title());
  console.log(await page.title());
});
