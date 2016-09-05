// using lodash module
var lodash = require('lodash');
var output = lodash.without([1,2,3],1);
console.log(output);

// using my message module
var msg =  require('./message.js');  //要給相對路徑，否則預設會去找node_modules底下的modules
msg();

// publish npm module (adduser -> publish )
/*
module.exports = {
    msg: msg
}
*/