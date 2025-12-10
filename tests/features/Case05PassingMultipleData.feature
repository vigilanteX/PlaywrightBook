Feature: check multiple data from table

  Scenario: Test passing multiple data
    Given We have multiple data
    When we we do action on "<username>" and "<password>"
    Then we say bye

    Examples:
      | username | password |
      | aman     | dixit    |
      | adarsh   | dixit    |
