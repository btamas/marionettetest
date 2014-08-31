var Backbone = require('backbone'),
	ListpageRouter = require('./router/listpageRouter'),

	ListpageModule = Backbone.Marionette.Module.extend({
		initialize: function() {
			this.router = new ListpageRouter();
		}
	});

module.exports = ListpageModule;
