module.exports = {
    "click test": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/click.html")
        browser.pause(2000)

        browser.click("#surprise-button")
        browser.pause(2000)
        browser.end()
    }
}