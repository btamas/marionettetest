var Backbone = require('backbone'),

	LayoutView = require('./layoutView'),
	Listpage = require('./modules/listpage/listpage'),

	Mazmin = Backbone.Marionette.Application.extend({
		channelName: 'mazmin',
		start : function() {
			Backbone.Marionette.Application.prototype.start.call(this);
			this.layoutView = new LayoutView();
			this.module('Listpage', { moduleClass: Listpage });
		}
	});

module.exports = Mazmin;
