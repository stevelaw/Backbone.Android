(function(Backbone, _) {

	// Create namespace if it does not exist.
	Backbone.Android = Backbone.Android || {};
			
	// Backbone.Android.ViewGroup
	// --------------------------
	var ViewGroup = Backbone.Android.ViewGroup = function(options) {
		Backbone.View.prototype.constructor.apply(this, arguments);
						
		this.addView = function(view) {
			$el.append(view);
		}
	};
	
	// An activity is an extension of a Backbone View
	ViewGroup.prototype = new Backbone.View();
	
}(Backbone, _));
