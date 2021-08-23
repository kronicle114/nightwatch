module.exports = {
    "Wait for elements": function(browser){
       // The first element is visible right at the load of the page
       //  The second element comes in 7 secs later
       // 
        browser.url("http://tutorials.actionqa.com/yt/nw/asserts/wait-for-element.html")
        browser.assert.visible("#element-1")
        browser.waitForElementVisible("#element-2",8 * 1000)
        browser.assert.not.elementPresent("#element-1")
        browser.waitForElementNotPresent("#element-2", 8 * 1000)

        // you can set a timeout for elements that cannot be visible by a specific time so for example, if the order page does not load if you are asserting that the search bar is present, you can set a time out for:
        // browser.expect.element("#search-bar").to.be.visible.before(2000)
    }
}