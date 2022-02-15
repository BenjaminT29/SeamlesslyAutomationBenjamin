package com.seamlessly.pages;

import com.seamlessly.utilities.ConfigurationReader;
import com.seamlessly.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public LoginPage(){  PageFactory.initElements(Driver.get(),this);}

    @FindBy(id = "user")
    public WebElement usernameBox;

    @FindBy(id = "password")
    public WebElement passwordBox;

     @FindBy(id = "submit-form")
    public WebElement loginButton;

     @FindBy(id = "lost-password")
    public WebElement forgotPassButton;

     @FindBy(id = "reset-password-submit")
    public WebElement resetPassButton;

     @FindBy(css = "p.warning.wrongPasswordMsg")
    public WebElement wrongErrorMessage;

    @FindBy(css = ".toggle-password")
    public WebElement eyeIcon;

    public void login(){
        Driver.get().get(ConfigurationReader.get("url"));
        usernameBox.sendKeys("username");
        passwordBox.sendKeys("password");
        loginButton.click();
    }
}
