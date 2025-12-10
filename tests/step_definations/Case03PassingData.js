import { Given, When, Then } from "@cucumber/cucumber";

Given(
  "given customer has data in source as {string} and age {int}",
  function (string, int) {
    // Given('given customer has data in source as {string} and age {float}', function (string, float) {
    // Write code here that turns the phrase above into concrete actions
    console.log(string, int);
  }
);
When("customer clicks", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("customer clicks");
});
Then("customer reached", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("customer reached");
});
