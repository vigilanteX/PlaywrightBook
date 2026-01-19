Feature: We are testing naveen automation labs site

  Scenario: Check naveen automation lab login page
    Given we open naveen automation labs site https://naveenautomationlabs.com/opencart/index.php?route=account/login
    When we enter username bobatea@gmail.com and password 12345
    And click on login button
    Then user should be able to login successfully
    And Take the screenshot of the logged in page as jan16.png
