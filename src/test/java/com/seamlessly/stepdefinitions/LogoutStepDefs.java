package com.seamlessly.stepdefinitions;

import com.seamlessly.pages.BasePage;
import com.seamlessly.pages.LoginPage;
import com.seamlessly.utilities.Driver;
import io.cucumber.java.en.*;
import org.junit.Assert;

public class LogoutStepDefs {
    @Given("the user logs in successfully")
    public void the_user_logs_in_successfully() {
        new LoginPage().login();
    }

    @When("the user clicks on the Log out link")
    public void the_user_clicks_on_the_Log_out_link() {
         new BasePage().logOutLink.click();
    }

    @When("the user navigates back")
    public void the_user_navigates_back() {
        Driver.get().navigate().back();
    }

    @Then("the user should NOT be able to go back to previous page")
    public void the_user_should_NOT_be_able_to_go_back_to_previous_page() {
        String expectedTitle="Seamlessly -QA";
        String actualTitle=Driver.get().getTitle();
        Assert.assertEquals("User is able to go back after log out",expectedTitle,actualTitle);
    }

}
