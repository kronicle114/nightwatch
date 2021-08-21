module.exports = {
    "navigate method": function (browser) {
        browser.url("https://www.google.com/")
        browser.pause(2000)

        // if you just use browser.pause() as in without an argument => the browser will stop indefinately and will not close the browser, you can use this to debug
    }
}