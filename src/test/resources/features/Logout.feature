
@wip
Feature:  Logout Feature

  Background:
    Given the user logs in successfully
   @SEAMLES-1406
  Scenario: User log outs and navigate to login page
    When the user clicks on the user avatar icon
    And the user clicks on the Log out link
    Then the user is on the login page

   @SEAMLES-1407
    Scenario: User is NOT able to go back after log out
      When the user clicks on the user avatar icon
      And the user clicks on the Log out link
      Then the user is on the login page
      When the user navigates back
      Then the user should NOT be able to go back to previous page

      