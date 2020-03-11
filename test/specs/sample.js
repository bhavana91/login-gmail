var webdriverio=require('webdriverio');
var options={desiredCapabilites:{browserName:'chrome'}};
var client=webdriverio.remote(options);
client 
     .init()
     .url('https://webdriver.io')
     .setValue('#search_form_input_homepage','webdriverIO')
     .click('#search_button_homepage')
     .getTitle().then(function (title) {
         console.log("tittle is:"+title);
         
     }).end();
