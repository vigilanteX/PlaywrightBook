// Optional load state to wait for, defaults to load. If the state has been already reached while loading current document, the method resolves immediately. Can be one of:

//Optional load state to wait for, defaults to load
//'load' - wait for the load event to be fired.
// 'domcontentloaded' - wait for the DOMContentLoaded event to be fired.
// 'networkidle' - DISCOURAGED wait until there are no network connections for at least 500 ms. Don't use this method for testing, rely on web assertions to assess readiness instead.
// HTML download
//    ↓
// HTML parsing
//    ↓
// Blocking scripts execute
//    ↓
// DOMContentLoaded
//    ↓
// (load continues)
//    ↓
// load
//    ↓
// Async code continues running ← here (and also before)

/*
In networkIdle below is flow:
HTML download
   ↓
HTML parsing + sync JS
   ↓
DOMContentLoaded
   ↓
Sub-resources load (images, CSS, fonts, iframes)
   ↓
load
   ↓
Network requests complete
   ↓
(no network activity for 500 ms)
   ↓
networkidle

Any type of network request — including API calls and file downloads from any source — has finished, and no new requests have started for at least 500 ms.

This includes downloads from:

Backend APIs

CDNs

Third-party services

Image servers

Font providers

Script and CSS hosts


*/

import { test } from "@playwright/test";

test("waitForLoadState()-demo", async function ({ page }) {
  await page.goto(
    "https://naveenautomationlabs.com/opencart/index.php?route=account/login"
  );
  console.log(new Date().toLocaleTimeString());
  await page.waitForLoadState("domcontentloaded");
  console.log(new Date().toLocaleTimeString() + "DOM loaded");
  await page.waitForLoadState("load");
  console.log(new Date().toLocaleTimeString() + "Loaded");
  await page.waitForLoadState("networkidle");
  console.log(new Date().toLocaleTimeString() + "networkidle");
});
