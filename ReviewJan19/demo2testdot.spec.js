import { test } from "@playwright/test";

// test("test1", async function ({ page }) {
//   console.log("test1 executed");
// });
// test("test2", async function ({ page }) {
//   console.log("test2 executed");
// });

//only->at discovery phase it detects test,
//it registers test with name and flag to execute only this test
//execution phase->when runner comes to this test,it sees the flag and executes it
//reporting phase->it reports the test as executed
// test.only("test3", async function ({ page }) {
//   console.log("test3 only executed");
// });

//skip->at discovery phase it detects test,
//it registers test with name  but flag not to execute it
//execution phase->when runner comes to this test,it sees the flag and skips it
//reporting phase->it reports the test as skipped
// test.skip("test4", async function ({ page }) {
//   console.log("test4 skipped");
// });

//fixme->at discovery phase it detects test,
//SIMILAR TO SKIP
//it registers test with name  but flag not to execute it
//execution phase->when runner comes to this test,it sees the flag and skips it
//reporting phase->it reports the test as skipped with fixme
// test.fixme("test5", async function ({ page }) {
//   console.log("test5 skipped with fixme");
// });

//fail->at discovery phase it detects test,
//it registers test with name and flag that this test is expected to fail
//execution phase->when runner comes to this test,it executes it
//if test fails->it sees the flag and considers it as passed
//if test passes->it sees the flag and considers it as failed(test was expected to fail but it passed)
//reporting phase->it reports the test as passed(if it failed)/failed(if it passed)
// test.fail("test6", async function ({ page }) {
//   console.log("test6 expected to fail");
//   throw new Error("intentionally failing test6");
// });
