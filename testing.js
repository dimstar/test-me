
// var util = require('util');

module.exports = {
    assert: function( expected, actual, messagenode ){
        if(expected === actual ){
            console.log('🎯 ' + message);
        } else {
            diff = util.inspect(expected) + "\n  " + util.inspect(actual);
            console.log("💩 " + message + "\n  Assertion not matched\n  " + diff);
        }
    },
    assert_true: function(actual, message){
        this.assert(true, actual, message)
    },
    assert_false: function(actual, message){
        this.assert(false, actual, message)
    }
}