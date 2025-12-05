import { test } from "@playwright/test";

test("new page working", async ({ context }) => {
  const google = await context.newPage();
  await google.goto("https://www.google.com/");

  const facebook = await context.newPage();
  await facebook.goto("https://www.facebook.com/");
  console.log(await facebook.title());
  console.log(await google.title());
});
