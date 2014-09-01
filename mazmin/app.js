var Backbone = require('backbone'),

	LayoutView = require('./layoutView'),
	Listpage = require('./modules/listpage/listpage'),
	ChatPerformer = require('./modules/performerchat/performerChat'),

	Mazmin = Backbone.Marionette.Application.extend({
		behavior: require('./behaviors'),
		channelName: 'mazmin',
		start : function() {
			Backbone.Marionette.Application.prototype.start.call(this);
			this.layoutView = new LayoutView();
			this.module('Listpage', Listpage);
			this.module('ChatPerformer', ChatPerformer);
		}
	});

module.exports = Mazmin;
