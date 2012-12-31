(function(Backbone, _) {

	// Create namespace if it does not exist.
	Backbone.Android = Backbone.Android || {};
			
	// Backbone.Android.View
	// ----------------------
	var View = Backbone.Android.View = function(options) {
		// Call Backbone.View constructor function with this object as the
		// context.  This allows us to extend a Backbone.View with our own 
		// functionality
		Backbone.View.prototype.constructor.apply(this, arguments);
	};
	
	View.prototype = new Backbone.View();
	
}(Backbone, _));
