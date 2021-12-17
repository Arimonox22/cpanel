const { readFileSync , writeFileSync } = require('fs');

var map = '7b22737570706c'

module.exports =(data)=>{
    const read = readFileSync('vHD.js')
    const part = read.toString().split('\n')
    const root = read.indexOf('var map')
    const end = read.indexOf('module')
    const start = read.slice(0,root)
    const endRoot = read.slice(end,read.length)
    const updRoot = Buffer.from(`var map = '${data}'\r\n\r\n`)
    var setRoot = Buffer.concat([start,updRoot,endRoot])
    if(data){
        writeFileSync('vHD.js',setRoot)
        return  `Update ${map}`
    }        
    return map
};
