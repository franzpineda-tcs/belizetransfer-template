var fs = require('fs')
//var json = require('../../../')

module.exports = {
    getData:async function(){
        return JSON.parse(fs.readFileSync('model/pages/pages.json'))
    },
    doesPageExist: async function(pageName){
        var data = await this.getData()
        console.log(data)
        return (data.pages.filter(function(v,i,c){return v==pageName})).length > 0
    }
}