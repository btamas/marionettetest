var Backbone = require('backbone'),

	ChatperformerController = Backbone.Marionette.Controller.extend({
		initialize: function() {
			console.log('initialize performer controller');
		},
		showPerformer: function() {
			console.log('performer show');
		}
	});

module.exports = ChatperformerController;
