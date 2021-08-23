module.exports = {
    "Assert Visible": ""+function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html")
        // Element is visible
        browser.assert.containsText("#more-text", "Hello! I'm some more text!") // note that the string is case sensitive && also assert can do partial matches
        browser.pause(2000)

        browser.click("#change-text")
        browser.pause(1000)
        browser.assert.not.containsText("#more-text", "some more text!") // partial text match is fine
        browser.assert.containsText("#more-text", "You changed me!")
        browser.pause(2000)
        browser.end()
    },
    "Expect Visible": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html")
        // Element is visible
        browser.expect.element("#more-text").text.to.equal("Hello! I'm some more text!") // note that the string is case sensitive if using equal
        browser.expect.element("#more-text").text.to.contain("some more text")
        browser.pause(2000)

        browser.click("#change-text")
        browser.pause(1000)
        // browser.assert.not.containsText("#more-text", "Hello! I'm some more text!")
        browser.expect.element("#more-text").text.to.not.contain("some more text")
        // browser.assert.containsText("#more-text", "You changed me!")
        browser.expect.element("#more-text").text.to.equal("You changed me!")
        browser.pause(2000)
        browser.end()
    }
}