const objects = {

    mainPage: {
        englishSearch: "//a[text()='English']",
        searchBar: "(//input[@type='text'])[1]",
    },
    searchPage: {
        searchFld: "//input[@name='q']",
        searchBtn: "(//input[@type='submit' and contains(@aria-label,'Google')])[1]",

        
    },
    resultsPage: {
        resultsTitle: "//h2[@data-attrid='title']/span",
        resultsParagraph: "//h2[@data-attrid='title']/../div/span",
    },
}
module.exports = objects
