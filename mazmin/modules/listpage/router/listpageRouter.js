var Backbone = require('backbone'),
	ListPageController = require('../controller/listpageController.js'),

	ListPageRouter = Backbone.Marionette.AppRouter.extend({
		controller : new ListPageController(),
		appRoutes  : {
			'list' : 'showListpage'
		}
	});

module.exports = ListPageRouter;
