import { expect, test } from "@playwright/test";
import axios from "axios";

test("demo11 test", async ({ page }) => {
  //await page.goto("https://example.com");
  let [res1] = await Promise.all([
    axios.get("http://localhost:3000/apiresponse1"),
    axios.get("http://localhost:3000/apiresponse2"),
  ]);
});
