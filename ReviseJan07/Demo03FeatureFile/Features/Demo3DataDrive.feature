Feature: Checking user sigin in functionality
  Scenario Outline  : Checking user login in desktop app
    Given User has username <name> and password <password>
    When User enters credentials in form
    And click on signin
    Then user lands on dashboard

    Examples:
      | name   | password |
      | aman   |    12345 |
      | adarsh | adxt1999 |
