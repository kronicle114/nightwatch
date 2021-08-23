const {
    URL,
    header,
    buttonHideHeader,
    buttonChangeText,
    buttonRemoveList
} = {
    URL: 'http://tutorials.actionqa.com/yt/nw/asserts/assert-vs-verify.html',
    header: '//*[@id="assert-verify-header"]',
    buttonHideHeader: '//*[@id="make-header-invisible"]',
    buttonChangeText: '//*[@id="change-text"]',
    buttonRemoveList: '//*[@id="remove-list"]'
}

module.exports = {
    // "" + // disables the test `"" +`
    "Assert Visible": function (browser) {
        browser.url(URL)
        // Element is visible
        browser.useXpath()
        browser.assert.visible(header)
        browser.click(buttonHideHeader)
        browser.assert.not.visible(header)
        browser.pause(2000)
    },
    "Expect Visible": function (browser) {
        browser.url(URL)
        browser.useCss()
        // Element is visible
        browser.expect.element("#assert-verify-header").to.be.visible;
        browser.click("#make-header-invisible") // button
        browser.expect.element("#assert-verify-header").to.be.not.visible;
        // Language Chains are just decorators so they don't really matter to the code, it's just to make things readable https://nightwatchjs.org/api/expect/#expect-chains
        browser.pause(2000)
    }
}