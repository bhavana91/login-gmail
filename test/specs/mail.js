//require("../testing pages/gmail-login-deatatiles")
//var expect = require('chai').expect;
//var LoginPage = require('../getvaluespage/gmail-click');

describe('click on google', function () {
    it('should open with google option', function () {
        
       browser.url("https://kalp.salesmate.io/login.html#")
       browser.pause(2000)
       let google=$(".glabel");
       google.click()
       browser.pause(2000)
       let handler=browser.getWindowHandles()
       let len=handler[handler.length-1]
       console.log(len)
       browser.switchToWindow(len);
       const email =  browser.$("//input[@id='identifierId']")
        email.setValue('rapidopsqa@gmail.com');
       const nextButton1=browser.$("//span[@class='RveJvd snByac']")
        nextButton1.click()
        browser.pause(4000);
       const password= browser.$("//input[@name='password']")
        password.setValue("Kalp@123456");
       const nextButton2=browser.$("//span[@class='RveJvd snByac']")
        nextButton2.click()
        browser.pause(18000);
        
    });

    
});