var Backbone = require('backbone'),
	HeaderRegion = require('./regions/headerRegion'),

	AppLayoutView = Backbone.Marionette.LayoutView.extend({
		regions : {
			header : new HeaderRegion({ el: '#header' }),
			main   : '#main',
			dialog : '#dialog'
		}
	});

module.exports = AppLayoutView;
