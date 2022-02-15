$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "As a user, I should be able to login.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with blank credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "the user is on the login page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user enters \"\u003cusername\u003e\" as username",
  "keyword": "When "
});
formatter.step({
  "name": "the user enters \"\u003cpassword\u003e\" as password",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "the user should see the Fill out message \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "username",
        ""
      ]
    },
    {
      "cells": [
        "",
        "password"
      ]
    },
    {
      "cells": [
        "",
        ""
      ]
    }
  ],
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenario({
  "name": "Login with blank credentials",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "the user enters \"username\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the Fill out message \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.theUserShouldSeeTheFillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with blank credentials",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "the user enters \"\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"password\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the Fill out message \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.theUserShouldSeeTheFillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with blank credentials",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "the user enters \"\" as username",
  "keyword": "When "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_enters_as_username(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"\" as password",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_enters_as_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.the_user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the Fill out message \"Please fill out this field.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.seamlessly.stepdefinitions.LoginStepDefs.theUserShouldSeeTheFillOutMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});