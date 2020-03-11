var assert=require('assert')
describe("login portal",()=>{ 
    it("working with login portal",()=>{
        browser.url('http://www.webdriveruniversity.com/')
        const login =  $("#login-portal")
        login.click()
      

        browser.pause(2000)  
        const LoginPageData=browser.getUrlAndTitle();
 
       
        browser.switchWindow('WebDriver | Login Portal')  
        expect(LoginPageData.title).to.contains('Login Portal')
        expect(LoginPageData.url).to.contains('Login-Portal')
        window.pause(2000)
        browser.closeWindow()
        
    })
})