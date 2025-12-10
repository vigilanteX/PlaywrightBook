import { Given, When, Then } from "@cucumber/cucumber";
Given("We have a data table", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("we have a data");
});
When("We load data", function (dataTable) {
  // Write code here that turns the phrase above into concrete actions
  console.log(dataTable, dataTable.rawTable[1][0], dataTable.rawTable[1][1]);
});
Then("Say Bye", function () {
  // Write code here that turns the phrase above into concrete actions
  console.log("bye");
});
