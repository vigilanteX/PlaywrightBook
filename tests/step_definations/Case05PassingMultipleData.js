import { Given, When, Then } from "@cucumber/cucumber";
Given("We have multiple data", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("we have multiple data");
});
When("we we do action on {string} and {string}", function (string, string2) {
  // Write code here that turns the phrase above into concrete actions
  console.log(string, string2);
});
Then("we say bye", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("bye");
});
