const { readFileSync , writeFileSync } = require('fs');

module.exports =(data)=>{
  writeFileSync('./tx',data)
}