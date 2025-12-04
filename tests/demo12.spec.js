import { expect, test } from "@playwright/test";
import axios from "axios";

test("demo11 test", async ({ page }) => {
  //   let [res1] = await Promise.all([
  //     axios.get("http://localhost:3000/apiresponse1"),
  //     axios.get("http://localhost:3000/apiresponse2"),
  //   ]);
  //download files
  // await page.goto("https://the-internet.herokuapp.com/download");
  // let [res] = await Promise.all([
  //   page.waitForEvent("download"),
  //   await page.getByText(`file.json`).click(),
  // ]);
  // console.log(res.suggestedFilename());
  // let path = `./${res.suggestedFilename()}`;
  // await res.saveAs(path);
  //multi file downlaod

  await page.goto("https://the-internet.herokuapp.com/download");
  let files = ["file.json", "sample.txt"];
  for (const file of files) {
    let [res] = await Promise.all([
      page.waitForEvent("download"),
      page.getByText(file).click(),
    ]);
    console.log(res.suggestedFilename());
    await res.saveAs(`./${res.suggestedFilename()}`);
  }
});
