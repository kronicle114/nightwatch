module.exports = {
    "set and clear": function (browser) {
    browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html")
    browser.setValue("#text-input", "Nightwatch is coolio")
    browser.pause(2000)

    browser.clearValue("#text-input")
    browser.pause(2000)
    browser.end()
    },
    // "use keys": function (browser) {
    //     browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html")
    //     browser.click("#text-input")
    //     browser.keys("were using keys")
    //     browser.pause(2000)

    //     // under the hood, the setValue is doing both the click and press keys to add the string in the input value
    // },
    // "use keys multi": function (browser) {
    //     browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html")
    //     browser.click("#text-input")
    //     browser.keys(["a", "b", "1"]) // you can use this to select all the keys
    //     browser.pause(2000)
    //     browser.end()

    //     //https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Key.html  -> you can use via browser.Keys.<COMMAND>
    // },
    // "KEYS": function (browser) {
    //     browser.url("http://tutorials.actionqa.com/yt/nw/basic/text-input.html")
    //     browser.click("#text-input")
    //     browser.keys("use keus")
    //     browser.pause(2000)
    //     browser.keys([
    //         browser.Keys.CONTROL,
    //         "a",
    //         browser.Keys.NULL, // to let go of all of the control keys you need to use browser.keys.NULL
    //         // browser.Keys.DELETE
    //     ])
    //     browser.pause(3000)
    //     browser.end()

        //https://www.selenium.dev/selenium/docs/api/javascript/module/selenium-webdriver/index_exports_Key.html  -> you can use via browser.Keys.<COMMAND>

        /*
         RAN INTO THE ERROR  BELOW
            npx nightwatch -e chrome test/text-input.js
                Error: ChromeDriver process exited with code: 1
                [1629574094.663][SEVERE]: bind() failed: Address already in use (48)

                at Process.ChildProcess._handle.onexit (internal/child_process.js:248:12)
                [1629574094.663][SEVERE]: bind() failed: Address already in use (48)
        
            THE FIX IS figure out what process is running on your chromedriver and then kill it
            ± ps -fA | grep chromedriver
                    501 34303     1   0  3:26PM ttys001    0:00.06 /Users/trishaaguinaldo/qa/simple/node_modules/chromedriver/lib/chromedriver/chromedriver --port=9515
                    501 34677 29557   0  3:30PM ttys001    0:00.00 grep --color=auto --exclude-dir=.bzr --exclude-dir=CVS --exclude-dir=.git --exclude-dir=.hg --exclude-dir=.svn --exclude-dir=.idea --exclude-dir=.tox chromedriver

            ± killall chromedriver
        */
    // }
}