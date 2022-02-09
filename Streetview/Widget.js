
define([
'dojo/_base/declare', 
'jimu/BaseWidget',
'jimu/loaderplugins/jquery-loader!https://code.jquery.com/jquery-git1.min.js',
"esri/geometry/Point",
"esri/SpatialReference",
"esri/symbols/SimpleMarkerSymbol",
"esri/graphic"
  ], 
function(declare, BaseWidget, $, Point, SR, SMS, Graphic){
	
	
	
  return declare(BaseWidget, {
    startup: function(){
      
      
    },
	onOpen: function () {
		
		var map = this.map;
				
		this.map.setMapCursor("crosshair"); 
		this.svevent = this.map.on('click', function(evt){
			
			var point = new Point(evt.mapPoint.getLongitude(), evt.mapPoint.getLatitude(), new SR({wkid:4326}));			
			var simpleMarkerSymbol = new SMS();
			var g = new Graphic(point, simpleMarkerSymbol);
			map.graphics.clear();
			map.graphics.add(g);
			
        	window.open("https://maps.google.com/?layer=c&cbll=" + evt.mapPoint.getLatitude() + "," + evt.mapPoint.getLongitude());
		
			
		});
		
	},
	onClose: function() {		
		this.svevent.remove();
		this.map.setMapCursor("default"); 
		this.map.graphics.clear();
	}
  });
});


