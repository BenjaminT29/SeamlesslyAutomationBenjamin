package com.seamlessly.stepdefinions;


import com.seamlessly.pages.BasePage;
import com.seamlessly.pages.LoginPage;
import com.seamlessly.utilities.ConfigurationReader;
import com.seamlessly.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.Keys;

public class LoginStepDefs {

    LoginPage login=new LoginPage();

    @Given("the user is on the login page")
    public void the_user_is_on_the_login_page() {
        Driver.get().get(ConfigurationReader.get("url"));
    }

    @When("the user enters {string} as username")
    public void the_user_enters_as_username(String username) {
        login.usernameBox.sendKeys(username);
    }

    @When("the user enters {string} as password")
    public void the_user_enters_as_password(String password) {
        login.passwordBox.sendKeys(password);
    }

    @When("the user clicks on the login button")
    public void the_user_clicks_on_the_login_button() {
        login.loginButton.click();
    }

    @Then("the user should be able to login successfully")
    public void the_user_should_be_able_to_login_successfully() {
        String expectedTitle=Driver.get().getTitle();
        String actualTitle=Driver.get().getTitle();
        System.out.println("actualTitle = " + actualTitle);
        Assert.assertEquals("User is NOT able to login",expectedTitle,actualTitle);
    }

    @When("the user clicks on the user avatar icon")
    public void the_user_clicks_on_the_user_avatar_icon() {
        new BasePage().avatar.click();
    }

    @Then("the user should see the username in the dropdown")
    public void the_user_should_see_the_username_in_the_dropdown() {
        BasePage basePage=new BasePage();
        String expectedUsername = ConfigurationReader.get("username");
        String actualUsername= basePage.dropdownUsername.getText();
        Assert.assertTrue("Username is NOT displayed", basePage.dropdownUsername.isDisplayed());
        Assert.assertEquals("Correct username is NOT displayed",expectedUsername,actualUsername);
    }

    @When("the user hits the enter button")
    public void the_user_hits_the_enter_button() {
        login.passwordBox.sendKeys(Keys.ENTER);
    }

    @Then("the user should NOT be able to login successfully")
    public void the_user_should_NOT_be_able_to_login_successfully() {
        String expectedTitle=Driver.get().getTitle();
        String actualTitle=Driver.get().getTitle();
        System.out.println("actualTitle = " + actualTitle);
        Assert.assertEquals("User is NOT able to login",expectedTitle,actualTitle);
    }

    @Then("the message {string} should be displayed on the page")
    public void the_message_should_be_displayed_on_the_page(String expectedMessage) {
        if(expectedMessage.equals("Wrong username or password.")){
            Assert.assertTrue(login.wrongErrorMessage.isDisplayed());
            String actualMessage = login.wrongErrorMessage.getText();
            Assert.assertEquals("The message is NOT displayed properly",expectedMessage,actualMessage );
        }else if(expectedMessage.equals("Please fill out this field.")){
            String userValidMessage=login.usernameBox.getAttribute("validationMessage");
            String passValidMessage=login.passwordBox.getAttribute("validationMessage");
            Assert.assertTrue(userValidMessage.equals(expectedMessage)||passValidMessage.equals(expectedMessage));
        }
    }

    @Then("the user should see the password in a form of dots")
    public void the_user_should_see_the_password_in_a_form_of_dots() {
        Assert.assertEquals("Password is NOT displayed in form of dots",login.passwordBox.getAttribute("type"),"password");
    }
    @When("the user clicks on the eye icon")
    public void the_user_clicks_on_the_eye_icon() {
        login.eyeIcon.click();
    }

    @Then("the user should see the password text")
    public void the_user_should_see_the_password_text() {
        Assert.assertEquals("Password is NOT displayed in form of dots",login.passwordBox.getAttribute("type"),"text");
    }
    @When("the user clicks on the Forgot password link")
    public void the_user_clicks_on_the_Forgot_password_link() {
       
    }

    @Then("the user should see the Reset Password button")
    public void the_user_should_see_the_Reset_Password_button() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("the user should see the {string} text in the username input box")
    public void the_user_should_see_the_text_in_the_username_input_box(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("the user should see the {string} text in the password input box")
    public void the_user_should_see_the_text_in_the_password_input_box(String string) {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
