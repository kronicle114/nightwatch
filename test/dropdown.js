module.exports = {
    "dropdown": function (browser) {
        browser.url("http://tutorials.actionqa.com/yt/nw/basic/drop-down.html")
        browser.setValue("#dropdown", "Thor")
        browser.pause(2000)

        for(let i = 1; i <= 4; ++i) {
            browser.click(`#dropdown option:nth-child(${i})`)
            browser.pause(1 * 1000)
        }
    }
}