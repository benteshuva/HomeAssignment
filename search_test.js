require('cypress-xpath')
const common = require('./functions/common.js')
const searchTerm = "Michael Jordan" //This is what we will search and check results header
const searchDetails = 'Chairman of the Charlotte Hornets' //This is what we will check in order to know we have the right results

describe('Navigate to Google website and search for Michael Jordan', function(){
    it('Checks the results are relevant according to what we searched.', function(){
        //Navigate to google
        common.navToGoogle();

        //Search 
        common.searchItem(searchTerm)
        
        //Check results
        common.checkResults(searchTerm, searchDetails)

    })
})