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
formatter.scenario({
  "name": "User log outs and navigate to login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user logs in successfully",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user clicks on the user avatar icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_clicks_on_the_user_avatar_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on the Log out link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "User is NOT able to go back after log out",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "the user logs in successfully",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user clicks on the user avatar icon",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_clicks_on_the_user_avatar_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on the Log out link",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user navigates back",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user should NOT be able to go back to previous page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});