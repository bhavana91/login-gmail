var assert=require('assert')
describe("checking for titile of google",()=>{
    it("weather passing a correct tittle or not",()=>{
        browser.url("https://www.google.com")
        browser.pause(1000)
        const title =  browser.getTitle()
        assert.strictEqual(title, 'Google')
    })
})