var jquery = require('jquery'),
	Backbone = require('backbone');

Backbone.$ = jquery;

var Marionette = require('marionette'),

	Mazmin = require('./mazmin/app'),
	mazmin = new Mazmin({
	});

window.mazmin = mazmin;
window.Backbone = Backbone;
window.$ = jquery;

mazmin.on('start', function() {
	console.log('history start');
	Backbone.history.start();
});

mazmin.start();
