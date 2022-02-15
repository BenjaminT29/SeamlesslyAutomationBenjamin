@wip

Feature:  Logout Feature

  Scenario: User log outs and navigate to login page
    Given the user logs in successfully
    When the user clicks on the user avatar icon
    And the user clicks on the Log out link
    Then the user is on the login page

    Scenario: User is NOT able to go back after log out
      Given the user logs in successfully
      When the user clicks on the user avatar icon
      And the user clicks on the Log out link
      Then the user is on the login page
      When the user navigates back
      Then the user should NOT be able to go back to previous page

      