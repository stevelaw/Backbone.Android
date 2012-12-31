(function(Backbone, _) {

	// Create namespace if it does not exist.
	Backbone.Android = Backbone.Android || {};
			
	// Backbone.Android.View
	// ----------------------
	Backbone.Android.View = function(options) {
		// Verify options is defined
		options = options || {};				
	};
	
	// An activity is an extension of a Backbone View
	Backbone.Android.View.prototype = Backbone.View;
	
}(Backbone, _));
