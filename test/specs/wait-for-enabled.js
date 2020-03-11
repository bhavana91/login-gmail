var assert=require('assert')
describe("xpath selector",()=>{ 
    it("working with xpath selector",()=>{
        browser.url('http://www.webdriveruniversity.com/')
       const clickbyXpathSelector=$('//h1[text()="AJAX LOADER"]/..');
       clickbyXpathSelector.click();
        browser.switchWindow("WebDriver | Ajax-Loader")
        const clickMeButton=$('//*[text()="CLICK ME!"]/..');    
        clickMeButton.waitForEnabled(10000,true);
        clickMeButton.click()
    })
})