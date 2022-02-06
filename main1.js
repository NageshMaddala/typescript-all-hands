var log = function (message) {
    console.log(message);
};
var dolog = function (message) { return console.log(message); };
log('hi');
dolog('dolog');
