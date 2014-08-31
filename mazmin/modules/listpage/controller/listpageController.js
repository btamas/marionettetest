var Backbone = require('backbone'),
	ListpageView = require('../view/listpageView'),

	ListpageController = Backbone.Marionette.Controller.extend({
		initialize: function() {
			console.log('initialize controller');
		},
		showListpage: function() {
			console.log('showListPage');
			this.listpageView = new ListpageView();
		}
	});

module.exports = ListpageController;
