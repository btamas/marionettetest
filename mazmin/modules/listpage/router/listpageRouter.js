var Backbone = require('backbone'),
	ListPageController = require('../controller/listpageController.js'),
	listPageController = new ListPageController(),

	ListPageRouter = Backbone.Marionette.AppRouter.extend({
		controller : listPageController,
		appRoutes  : {
			'list' : 'showListpage'
		}
	});

window.listPageController = listPageController;

module.exports = ListPageRouter;
