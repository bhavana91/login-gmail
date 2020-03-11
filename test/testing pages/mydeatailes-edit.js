var expect = require('chai').expect;
var LoginPage = require('../getvaluespage/myprofile-data-page');

describe('myprofile data upgrade', function () {
    it('is it success', function () {
       LoginPage.open();
        LoginPage.firstname.setValue('bahvana');
        LoginPage.lastname.setValue('123456');
        LoginPage.emailaddress.setValue('bhavana@gmail.com');
        LoginPage.mobilenumber.setValue('1234567865');
        LoginPage.timeformat.setValue('123456');
        LoginPage.dateformat.setValue('123456');
        LoginPage.timezone.setValue('123456');
        LoginPage.nickname.setValue('bhavs');
        LoginPage.signature.setValue('h!');

        LoginPage.submit();

        
    });

    
});