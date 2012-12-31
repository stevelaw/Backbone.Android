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
	var Activity = Backbone.Android.Activity = function(options) {
		// Call Backbone.View constructor function with this object as the
		// context.  This allows us to extend a Backbone.View with our own 
		// functionality
        Backbone.View.prototype.constructor.apply(this, arguments);
        
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
    
    Activity.prototype = new Backbone.View(); 
		
}(Backbone, _));
