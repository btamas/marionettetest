var Backbone = require('backbone'),
	ListpageView = require('../view/listpageView'),
	ListpageModel = require('../model/listpageModel'),

	ListpageController = Backbone.Marionette.Controller.extend({
		initialize: function() {
			console.log('initialize controller');
		},
		showListpage: function() {
			this.listpageView = new ListpageView({
				model : new ListpageModel()
			});
		}
	});

module.exports = ListpageController;
