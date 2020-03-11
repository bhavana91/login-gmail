var expect = require('chai').expect;
var LoginPage = require('../getvaluespage/profile.click');

describe('click on profile', function () {
    it('should open setting', function () {
       LoginPage.open();
        LoginPage.userprofile.click();
        LoginPage.myaccount.click();
       
        
    });

    
});