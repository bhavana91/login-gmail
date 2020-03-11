var assert=require('assert')
let contact=function(){
    browser.url('http://www.webdriveruniversity.com/')
        const title =  $("#contact-us")
        title.click()
        browser.switchWindow('WebDriver | Contact Us');       
  
} 
describe("entering data in the feedback form",()=>{ 
    it("searching element",()=>{
       contact()

        $('[name=last_name').setValue("reddy")
        $('[name=first_name]').setValue("bahvana")
       $('[name=last_name').setValue("reddy")

       $('[name=email]').setValue("bahva@gmail.com")

       $('[name=message').setValue("kalpmessagetest")
       const submitButton=$("//*[@value='SUBMIT']");
       submitButton.click()
       browser.url("http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html")
        
    })
    it("searching element",()=>{
       contact()

        $('[name=last_name').setValue("reddy")
        $('[name=first_name]').setValue("bahvana")
       $('[name=last_name').setValue("reddy")

       $('[name=email]').setValue("bahva@gmail.com")

      
       const submitButton=$("//*[@value='SUBMIT']");
       submitButton.click()
       browser.url("http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html")
        
    })
    it("searching element",()=>{
       
contact()
        $('[name=last_name').setValue("reddy")
        $('[name=first_name]').setValue("bahvana")
       $('[name=last_name').setValue("reddy")

       
       const submitButton=$("//*[@value='SUBMIT']");
       submitButton.click()
       browser.url("http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html")
    })
    it("searching element",()=>{
            contact()       
          
        $('[name=first_name]').setValue("bahvana")
       
       
       const submitButton=$("//*[@value='SUBMIT']");
       submitButton.click()
       browser.url("http://www.webdriveruniversity.com/Contact-Us/contact-form-thank-you.html")
        
    })
})
