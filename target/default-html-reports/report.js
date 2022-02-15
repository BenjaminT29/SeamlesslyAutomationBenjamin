$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "As a user, I should be able to login.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User see valid placeholders on Username and Password fields",
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
  "name": "the user should see the \"Username or email\" text in the username input box",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_should_see_the_text_in_the_username_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the \"Password\" text in the password input box",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_should_see_the_text_in_the_password_input_box(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});