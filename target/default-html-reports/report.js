$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "As a user, I should be able to login.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User access the \u0027Reset password\u0027 button after clicking \u0027Forgot password?\u0027 link",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_is_on_the_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the Forgot password link",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_clicks_on_the_Forgot_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the Reset Password button",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_should_see_the_Reset_Password_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});