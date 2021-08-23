module.exports = {
    "Enabled Test": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/enabled.html")
        browser.assert.attributeEquals("#am-i-disabled", "disabled", "true")
        browser.setValue("#type-to-enable", "Enabled")
        browser.pause(2000)
        // browser.assert.attributeEquals("#am-i-disabled", "disabled", "false") // this will error out
        // below is EXPECT test WHEN A BUTTON IS DISABLED
        browser.expect.element("#am-i-disabled").to.be.enabled
    }
}