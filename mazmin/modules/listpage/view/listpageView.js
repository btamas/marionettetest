var Backbone = require('backbone'),
	_ = require('underscore'),

	ListpageView = Backbone.Marionette.View.extend({
		el: '#listpage',
		events: {
			click : 'loadPerformer'
		},
		behaviors: {
			InfiniteScroll : {}
		},
		loadPerformer: function() {
			Backbone.history.navigate('/performer', {trigger: true});
		},
		showMore: function() {
			this.model.fetch().done(_.bind(function() {
				this.$el.append(this.model.attributes.content);
			}, this));
		}
	});

module.exports = ListpageView;
