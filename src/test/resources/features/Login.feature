
Feature: As a user, I should be able to login.




  Scenario: User login with valid credentials
    Given the user is on the login page
    When the user enters "Employee11" as username
    And the user enters "Employee123" as password
    And the user clicks on the login button
    Then the user should be able to login successfully
    When the user clicks on the user avatar icon
    Then the user should see the username in the dropdown

  Scenario: User login with valid credentials

    When the user enters "Employee11" as username
    And the user enters "Employee123" as password
    And the user hits the enter button
    Then the user should be able to login successfully
    When the user clicks on the user avatar icon
    Then the user should see the username in the dropdown

  Scenario: User see the password in a form of dots by default

    When the user enters "Employee11" as username
    And the user enters "Employee123" as password
    Then the user should see the password in a form of dots