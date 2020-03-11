var expect = require('chai').expect;
var LoginPage = require('../getvaluespage/login-salesmate');

describe('login form', function () {
    it('should allow access with correct creds', function () {
        LoginPage.open();
        LoginPage.username.setValue('bhavana.polireddy@rapidops.com');
        LoginPage.password.setValue('bhavana@123@1997');
        LoginPage.submit();
    });
});