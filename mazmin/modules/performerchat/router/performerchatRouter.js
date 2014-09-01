var Backbone = require('backbone'),
	ChatPerformerController = require('../controller/chatperformerController'),

	ChatPerformerRouter = Backbone.Marionette.AppRouter.extend({
		controller : new ChatPerformerController(),
		appRoutes  : {
			performer : 'showPerformer'
		}
	});

module.exports = ChatPerformerRouter;
