var Backbone = require('backbone'),

	InfiniteScroll = Backbone.Marionette.Behavior.extend({
		defaults: {
			triggerDistance : 500
		},
		events: {
			scroll : 'checkScroll'
		},
		checkScroll: function() {
			if (this.$el.scrollTop() + 500 > this.$el.get(0).scrollHeight) {
				this.view.showMore();
			}
		}
	});

module.exports = InfiniteScroll;
