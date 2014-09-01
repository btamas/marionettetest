var Backbone = require('backbone'),
	_ = require('underscore'),

	ListModel = Backbone.Model.extend({
		url : 'list.html',
		fetch: function(options) {
			return Backbone.Model.prototype.fetch.call(this, _.extend({ dataType: 'html'}, options));
		},
		parse: function(response) {
			return {
				content : response
			};
		}
	});

module.exports = ListModel;
