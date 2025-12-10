Feature: using data table

  Scenario: checking data table
    Given We have a data table
    When We load data
      | UserName | Password |
      | Aman     |    12345 |
      | Dixit    | amanxcv  |
    Then Say Bye
