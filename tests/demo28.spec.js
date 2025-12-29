import { test } from "./fixtures/test-fixtures.js";

test("fixture demo", async function ({
  page,
  testData,
  dataConnector,
  apiCall,
}) {
  console.log(`Username: ${testData.username}`);
  console.log(`Data Connector Connected: ${dataConnector.connected}`);
  const keys = ["USERNAME", "PASSWORD", "BASE_URL", "ENV"];
  const ar = keys.filter((key) => key === "USERNAME");
  console.log("Environment Variables:", ar);
  console.log(apiCall);
  await page.goto("https://google.com");
});
test("fixture demo2", async function ({
  page,
  testData,
  dataConnector,
  apiCall,
}) {
  console.log(`Username: ${testData.username}`);
  console.log(`Data Connector Connected: ${dataConnector.connected}`);
  const keys = ["USERNAME", "PASSWORD", "BASE_URL", "ENV"];
  const ar = keys.filter((key) => key === "USERNAME");
  console.log("Environment Variables:", ar);
  console.log(apiCall);
  await page.goto("https://google.com");
});
