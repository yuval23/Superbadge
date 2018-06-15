({
    jsLoaded: function(component) {
      
          //component.set("v.location.map", map);
        
        component.set("v.jsLoaded", true);
    },
    setLocation: function(component, event, helper) {
        //var map = component.get('v.map');
        
        var sObjectId = event.getParam('sObjectId');
        var lat = event.getParam('lat');
        var long = event.getParam('long');
        var label = event.getParam('label');
		console.log('label => ' +label);
            component.set("v.location", {
                lat: lat,
                long: long
            });
        
    }
})