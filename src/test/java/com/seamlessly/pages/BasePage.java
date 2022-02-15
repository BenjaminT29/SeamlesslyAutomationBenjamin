package com.seamlessly.pages;

import com.seamlessly.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
    public BasePage(){PageFactory.initElements(Driver.get(),this);}

    @FindBy(css = "div.avatardiv.avatardiv-shown")
    public WebElement avatar;

    @FindBy(css = "span.user-status-menu-item__header")
    public WebElement dropdownUsername;






}
