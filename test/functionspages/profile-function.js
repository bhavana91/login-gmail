function Page() {
   
    Page.prototype.open = function() {
        //browser.url("https://kalp.salesmate.io/login.html");
      //  browser.url("https://kalp.salesmate.io/#");
        browser.pause(10000)

        browser.url("https://kalp.salesmate.io/#/app/dashboard");
    
    }
    }
    module.exports = new Page();