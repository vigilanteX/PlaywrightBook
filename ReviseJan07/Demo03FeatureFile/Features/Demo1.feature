Feature: To check app login functionality

  Scenario: To check customer is able to login desktop app positive
    Given user is having credentials
    When user provides username and password 
    And clicks on sign in button
    Then user should land on dashboard
