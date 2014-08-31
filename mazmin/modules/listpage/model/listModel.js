var Backbone = require('backbone'),

	ListModel = Backbone.Model.extend({
		url : '/list.html'
	});

module.exports = ListModel;
