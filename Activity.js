(function(Backbone, _) {

	// Create namespace if it does not exist.
	Backbone.Android = Backbone.Android || {};
	
	// Helper functions
	var capitalize = function(str){
		str = str == null ? '' : String(str);
		return str.charAt(0).toUpperCase() + str.slice(1);
	};
	
	var noop = function(){};

	// Lifecycle method array
	var lifecycle = ['create', 'start', 'restart', 'resume', 'pause', 'stop', 'destroy'];
	
	// Backbone.Android.Activity
	// -------------------------
	Backbone.Android.Activity = function(options) {
		// Verify options is defined
		options = options || {};		
		
		// Setup lifecycle methods - provide defaults where no method is 
		// provided.
		_.each(lifecycle, function(method) {
			var methodName = 'on' + capitalize(method);
			this[methodName] = options[methodName] || function() {
				console.log('Default ' + methodName + ' implementation.');
			}
		}, this);
		
		this.onCreate.apply(this, arguments);		
	};
	
	// An activity is an extension of a Backbone View
	Backbone.Android.Activity.prototype = Backbone.View;
	
}(Backbone, _));
