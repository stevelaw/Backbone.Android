(function(Backbone, _) {

	// Create namespace if it does not exist.
	Backbone.Android = Backbone.Android || {};
			
	// Backbone.Android.View
	// ----------------------
	var View = Backbone.Android.View = function(options) {
		Backbone.View.prototype.constructor.apply(this, arguments);
	};
	
	// An activity is an extension of a Backbone View
	View.prototype = new Backbone.View();
	
}(Backbone, _));
