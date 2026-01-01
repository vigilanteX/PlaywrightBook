import tester from "./custom.fixture.js";

tester("function", async function ({ name, print }) {
  await print.locator("#input-email").fill("aman dixit");
  await print.waitForTimeout(5000);
});
tester("function2", async function ({ name, print }) {
  await print.locator("#input-password").fill("aman dixit");
  await print.waitForTimeout(5000);
});
tester("function3", async function ({ request }) {
  const data = await request.get("http://localhost:3000/playwrightget");
  console.log(await data.json());
  console.log(data.status());
});
