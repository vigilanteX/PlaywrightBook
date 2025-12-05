import { test } from "@playwright/test";

test("demo test 15", async ({ context }) => {
  const page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/windows");
  const [newpage] = await Promise.all([
    context.waitForEvent("page"),
    page.getByText("Click Here").click(),
  ]);
  await newpage.waitForLoadState();
  console.log(newpage.url());
  console.log(await newpage.title());
});
