var test = require('./testing');

function add(a, b){
    return a + b;
}

test.assert(6, add(2, 6), "2 + 4 === 6");

