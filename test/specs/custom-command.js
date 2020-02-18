var assert=require('assert')
describe("add custom",()=>{ 
    it("working with login portal",()=>{
        browser.url('http://www.webdriveruniversity.com/')
        const login =  $("#login-portal")
        login.click()
        browser.pause(2000)   
      /*   let title=browser.getTitle()
        let url=browser.getUrl() */
        const LoginPageData=browser.getUrlAndTitle();
        expect(LoginPageData.title).to.contains('Login Portal')
        expect(LoginPageData.url).to.contains('Login-Portal')
        window.pause(2000)
        browser.closeWindow()
    })
})