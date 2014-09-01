var Backbone = require('backbone'),
	PerformerChatRouter = require('./router/performerchatRouter'),

	PerformerChatModule = Backbone.Marionette.Module.extend({
		initialize: function() {
			console.log('performerChata', this);
			this.router = new PerformerChatRouter();
		}
	});

module.exports = PerformerChatModule;
