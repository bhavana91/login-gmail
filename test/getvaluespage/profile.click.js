var Page=require("../functionspages/profile-function")
var LoginPage = Object.create(Page, {
    /**
     * define elements
     */
    userprofile: { get: function () { return browser.$('span[title="bhavana polireddy"] > thumb'); } },
    myaccount: { get: function () { return browser.$('.dropdown.navi-user-thumb.t-f-tr > popper-content > div[role="popper"]  .popperdropmenu.w > li:nth-of-type(1) > a'); } },

    
    

    /**
     * define or overwrite page methods
     */
    open: { value: function() {
        Page.open.call(this, 'login');
    } },

    submit: { value: function() {
        this.userprofile.click();
        //this.myaccount.click()
        
    } }

   
});

module.exports = LoginPage;