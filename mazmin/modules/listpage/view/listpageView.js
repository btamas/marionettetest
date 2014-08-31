var Backbone = require('backbone'),
	ListView = require('./listView'),
//	ListModel = require('../model/listModel'),

	ListpageView = Backbone.Marionette.CollectionView.extend({
		el        : '#listpage',
		childView : ListView,
		events: {
		},
		initialize: function() {
			console.log('init listpage');
		}
	});

module.exports = ListpageView;
