var testActivity = new Backbone.Android.Activity({
	onCreate: function() {
		console.log('In custom onCreate');
		
		var grid1 = new Backbone.Android.Widget.Grid();
		var grid2 = new Backbone.Android.Widget.Grid();
		
	}
});

console.log(testActivity);

var testActivity2 = new Backbone.Android.Activity({
	onCreate: function() {
		console.log('In custom onCreate');
		
		var grid1 = new Backbone.Android.Widget.Grid();
		var grid2 = new Backbone.Android.Widget.Grid();
		
	}
});

console.log(testActivity2);