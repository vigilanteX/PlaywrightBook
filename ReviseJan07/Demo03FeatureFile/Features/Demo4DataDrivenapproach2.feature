Feature: To test login app functionality

  Scenario: To test login app functionality in desktop
    Given User have credentials
    When user enter username and password
      | username | password |
      | aman     |    12345 |
      | adarsh   |   456789 |
    Then user needs to click on signIn
