var Backbone = require('backbone'),

	ListView = Backbone.Marionette.ItemView.extend({
		initialize: function() {
			console.log('itemview initialize');
		},
		el: '.list',
		ui: {
			performerImages : 'img'
		},
		events: {
			'click @ui.performerImages' : 'onPerformerImageClick'
		},
		onPerformerImageClick: function() {
			console.log('performerImageClick');
		}
	});

module.exports = ListView;
