$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Logout.feature");
formatter.feature({
  "name": "Logout Feature",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in successfully",
  "keyword": "Given "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LogoutStepDefs.the_user_logs_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User log outs and navigate to login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SEAMLES-1406"
    }
  ]
});
formatter.step({
  "name": "the user clicks on the user avatar icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_clicks_on_the_user_avatar_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the Log out link",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LogoutStepDefs.the_user_clicks_on_the_Log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user logs in successfully",
  "keyword": "Given "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LogoutStepDefs.the_user_logs_in_successfully()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User is NOT able to go back after log out",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    },
    {
      "name": "@SEAMLES-1407"
    }
  ]
});
formatter.step({
  "name": "the user clicks on the user avatar icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_clicks_on_the_user_avatar_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the Log out link",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LogoutStepDefs.the_user_clicks_on_the_Log_out_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates back",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LogoutStepDefs.the_user_navigates_back()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should NOT be able to go back to previous page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LogoutStepDefs.the_user_should_NOT_be_able_to_go_back_to_previous_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});