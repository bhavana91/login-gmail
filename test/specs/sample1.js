var assert=require('assert')
/* let contact=function(){
   
} */
describe("entering data in the feedback form",()=>{ 
    it("searching element",()=>{
        browser.url('http://www.webdriveruniversity.com/')
        const title =  $("#contact-us")
        title.click()
        browser.url("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
       $('[name=first_name]').setValue("bahvana")
       $('[name=last_name').setValue("reddy")
       $('[name=email]').setValue("bahva@gmail.com")
       $('[name=message').setValue("kalpmessagetest")
       $(".contact_button").click()
       browser.url("http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html")
        
    })
})
