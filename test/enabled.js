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

// browser.assert and browser.verify
// Verify has the same exact calls as assert. If verify fails, then the test will still run. If assert fails, then the test stops. 
// Use verify when you need the test to run if you want a result of all of the failure when the test finishes. 
