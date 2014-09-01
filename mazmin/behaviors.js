var Backbone = require('backbone'),
	InfiniteScroll = require('./modules/infinitescroll/infiniteScroll');

module.exports = (function() {
	Backbone.Marionette.Behaviors.behaviorsLookup = function() {
		return {
			InfiniteScroll : InfiniteScroll
		};
	};
})();
