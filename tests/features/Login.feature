Feature: Test login and logout

  Scenario: Customer try success login and logout
    Given User opens naveen automation labs and provide credentials
    When User clicks on login
    Then User should land on website as logged in user
