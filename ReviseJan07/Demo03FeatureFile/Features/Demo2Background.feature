Feature: User Profile Management

  Background: User is logged into the system
    Given the user is on the "Login" page
    And the user enters valid credentials
    And the user clicks the "Submit" button
    Then the user should be redirected to the "Dashboard"

  Scenario: Update profile picture
    When the user uploads a new profile image
    Then the profile image should be updated successfully

  Scenario: Change account password
    When the user navigates to "Settings"
    And updates their password
    Then they should receive a confirmation email
