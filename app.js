var modul = require('./folder/testmod.js');

var f=function() {
    modul.func();
}

setTimeout(function() {
    f();
}, 1000);