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
    Given the user is on the login page
    When the user enters "Employee11" as username
    And the user enters "Employee123" as password
    And the user hits the enter button
    Then the user should be able to login successfully
    When the user clicks on the user avatar icon
    Then the user should see the username in the dropdown


  Scenario Outline: User is NOT be able to login without valid credentials
    Given the user is on the login page
    When the user enters "<username>" as username
    And the user enters "<password>" as password
    And the user clicks on the login button
    Then the user should NOT be able to login successfully
    And the message "<error message>" should be displayed on the page
    Examples:
      | username   | password    | error message               |
      | Employe11  | Employee123 | Wrong username or password. |
      | Employee11 | Employe123  | Wrong username or password. |
      |            | Employee123 | Please fill out this field. |
      | Employee11 |             | Please fill out this field. |
      |            |             | Please fill out this field. |

  Scenario: User see the password in a form of dots by default
    Given the user is on the login page
    When the user enters "Employee11" as username
    And the user enters "Employee123" as password
    Then the user should see the password in a form of dots

  Scenario: User see the password text by clicking the eye icon
    Given the user is on the login page
    When the user enters "Employee11" as username
    And the user enters "Employee123" as password
    Then the user should see the password in a form of dots
    When the user clicks on the eye icon
    Then the user should see the password text
  
  Scenario: User access the 'Reset password' button after clicking 'Forgot password?' link
    Given the user is on the login page
    When the user clicks on the Forgot password link
    Then the user should see the Reset Password button
  @wip
  Scenario: User see valid placeholders on Username and Password fields
    Given the user is on the login page
    Then the user should see the "Username or email" text in the username input box
    And the user should see the "Password" text in the password input box
