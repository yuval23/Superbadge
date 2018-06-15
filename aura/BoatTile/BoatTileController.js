({
	onBoatClick : function(component, event, helper) {
		var selected = component.get('v.selected');
        var boatSelected = component.get('v.boat');
   		console.log('selected => ' + selected + ' boatSelected => ' + boatSelected.Id);
        
        var boatSelectEvent = component.getEvent("boatSelect");
        boatSelectEvent.setParams({"boatId" : boatSelected.Id });
        boatSelectEvent.fire();   

       

   
            var boatSelectAppEvent = $A.get("e.c:BoatSelected");
            boatSelectAppEvent.setParams({ "boat" : boatSelected });
            boatSelectAppEvent.fire();

            var lat = boatSelected.Geolocation_Latitude__s;
            var long = boatSelected.Geolocation_Longitude__s;
            var label = boatSelected.Name;

            var PlotMapMarkerEvent = $A.get("e.c:PlotMapMarker");
            PlotMapMarkerEvent.setParams({
                                             "sObjectId" : boatSelected.Id,
                                             "lat": lat,
                                             "long":long,
                                             "label":label,
                                        });
            PlotMapMarkerEvent.fire();

	},
})