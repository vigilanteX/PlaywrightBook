import { expect, test } from "@playwright/test";
//Non-Retrying Assertions (Sync)
test(`expect(value).toBe(5)
Exact equality (===)`, async function ({ page }) {
  expect(1).toBe(1);
});
test(`expect(a).toEqual(c)`, async function () {
  let x = [1, 2, 3, 4];
  let y = [1, 2, 3, 4];
  let z = [1, 2, 2, 2];
  let a = { name: "aman", age: 34 };
  let b = { name: "aman", age: 35 };
  let c = { age: 35 };

  expect(a).toEqual(c);
});

test("expect(value).toBeTruthy()", async function () {
  let val = [0, false, "", null, undefined, NaN, true];
  expect(val[6]).toBeTruthy();
});

test("toContain()", function () {
  expect([1, 2, 3, "aman", "c"]).toContain("aman"); //works on array
});

test("expect(value).toBeDefined()", async function () {
  expect(1).toBeDefined(); //other than undefiend all works
});
