var Page=require("../functionspages/login-gmail-funct")
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    google: { get: function () { return browser.$('.glabel'); } },
    


    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
       
        this.google.click();
        
    } },

   
});

module.exports = LoginPage;