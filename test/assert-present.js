module.exports = {
    "Assert Present": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html")
        browser.assert.elementPresent("#some-id")
        browser.assert.elementPresent("#remove-list")
        browser.click("#remove-list")
        browser.pause(2000)
        browser.assert.not.elementPresent("#some-id")
        // browser.pause(2000)
    }
}