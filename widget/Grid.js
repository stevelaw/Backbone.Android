(function(Backbone, _) {

	// Create namespace if it does not exist.
	Backbone.Android = Backbone.Android || {};
	Backbone.Android.Widget = Backbone.Android.Widget || {};
			
	// Backbone.Android.View
	// ----------------------
	Backbone.Android.Widget.Grid = function(options) {
		// Verify options is defined
		options = options || {};				
	};
	
	// An activity is an extension of a Backbone View
	Backbone.Android.Widget.Grid.prototype = new Backbone.Android.ViewGroup();
	
}(Backbone, _));
