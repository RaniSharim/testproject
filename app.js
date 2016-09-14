var modul = require('./folder/testmod.js');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Master() {
   EventEmitter.call(this);
};

// Declare that your class should use EventEmitter as its prototype.
// This is roughly equivalent to: Master.prototype = Object.create(EventEmitter.prototype)
util.inherits(Master, EventEmitter);

var myEmitter = new Master();

myEmitter.on('event', function() { modul.func(); });

setTimeout(function() {
    myEmitter.emit('event');
}, 1000);
