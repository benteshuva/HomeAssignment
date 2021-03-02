require('cypress-xpath')
const po = require('../pages/po.js')

module.exports = 
{
    //Navigates to Google's main search page and validates search field is loaded
    navToGoogle: ()=>
    {
        cy.visit('https://www.google.com/')
        cy.xpath(po.searchPage.searchFld, { timeout: 10000 }).should('be.visible');
    },
    
    //Search for results in google
    searchItem: (item)=>
    {   
        cy.xpath(po.mainPage.englishSearch).click()
        if (item !== typeof String)
        {
            console.log('Type sent is not supported - please send a string as a parameter')
            //break;
        }
        cy.xpath(po.searchPage.searchFld).type(item)
        cy.xpath(po.searchPage.searchBtn).click()
    },

     //Search for results in google
     checkResults: (title, details)=>
     {   
         if (title !== typeof String || details !== typeof String)
         {
             console.log('Type sent is not supported - please send a string as a parameter')
             //break;
         }
         //Wait till results header details are loaded
         cy.xpath(po.resultsPage.resultsTitle, { timeout: 10000 }).should('be.visible')

         //Assert title and details
         cy.xpath(po.resultsPage.resultsTitle).invoke('text').should('eq', title)
         cy.xpath(po.resultsPage.resultsParagraph).invoke('text').should('eq', details)
     },
}