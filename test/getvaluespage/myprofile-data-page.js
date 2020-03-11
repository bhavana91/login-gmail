var Page=require("../functionspages/myprofile-page-open.js")
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    
firstname: { get: function () { return browser.$('#firstName');
} },
lastname: { get: function () { return browser.$('#lastName'); } },
emailaddress: { get: function () { return browser.$('#email'); } },
mobilenumber: { get: function () { return browser.$('#mobile'); } },
timeformat: { get: function () { return browser.$('.select2.select2-container.select2-container--below.select2-container--default  span[role="combobox"] > span[role="textbox"]'); } },
dateformat: { get: function () { return browser.$('/html//div[@id="app"]//my-account//sm-general-settings/section//div[@class="wrapper-lg"]/div[@class="row"]/form/div[@class="col-md-12"]/div[3]/sm-select-box[2]/sm-element/div/span//span[@role="combobox"]/span[@role="textbox"]'); } },
timezone: { get: function () { return browser.$('div:nth-of-type(4) > div > .col-md-6.ng-touched > .has-feedback.ng-pristine.ng-untouched.ng-valid  .select2.select2-container.select2-container--below.select2-container--default  span[role="combobox"] > span[role="textbox"]'); } },
nickname: { get: function () { return browser.$('#nickname'); } },
signature: { get: function () { return browser.$('#fr-iframe'); } },
upgrade: { get: function () { return browser.$('.btn.btn-sm.m-l-sm.upgrade-btn'); } },


    
    

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.upgrade.click();
        //this.myaccount.click()
        
    } }

   
});

module.exports = LoginPage;