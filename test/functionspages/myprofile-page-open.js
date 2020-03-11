function Page() {
   
    Page.prototype.open = function() {
        browser.url("https://kalp.salesmate.io/#/app/user/profile");
    
    }
    }
    module.exports = new Page();