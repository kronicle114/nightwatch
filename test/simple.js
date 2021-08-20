module.exports = {
    "Hello, world!": function (browser){
        // browser.url("http://tutorials.actionqa.com/yt/nw/simple.html")
        // browser.pause(2000)

        // browser.click("#fun-link")
        // browser.pause(2000)

        browser.url("http://tutorials.actionqa.com/yt/nw/locator-01.html")
        browser.pause(1000)

        const cssSelector = "#text-input"
        const xpathSelector = ""

        // by default, nightwatch uses css as a selector 
        browser.setValue(cssSelector, "this is a ccs selector")

        // if you want to use xpath as default
        browser.useXpath()
        browser.setValue(xpathSelector, "this is a xpath selector")

        browser.useCss()
        browser.clearValue(cssSelector)
    }
}