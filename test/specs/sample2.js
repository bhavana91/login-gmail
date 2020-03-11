var assert=require('assert')
describe("google search",()=>{ 
    it("searching element",()=>{
        browser.url('http://www.webdriveruniversity.com/')
        const title =  $("#contact-us")
        title.click()
        console.log("home page header:" + browser.getTitle())
        browser.pause(2000)   
        browser.switchWindow('WebDriver | Contact Us')  
        console.log("contact page header:" + browser.getTitle())
        browser.closeWindow()
        
    })
})