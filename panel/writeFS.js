const { readFileSync , writeFileSync } = require('fs');

module.exports =(data)=>{
  writeFileSync('../hs.js',data)
}
