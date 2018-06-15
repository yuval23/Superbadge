({
	onBoatSelected : function(component, event, helper) {
		var boat = event.getParam('boat');
		component.set("v.id",boat.Id);
        component.find('service').reloadRecord();
        console.log('onBoatSelected get boat ' + boat );
	},
    onRecordUpdated: function(component, event, helper) {
        var eventParams = event.getParams();
        
        if(eventParams.changeType === "LOADED") {
           // record is loaded 
           console.log("Record is loaded successfully.");
           
        } else if(eventParams.changeType === "CHANGED") {
            var BRcomp = component.find('BRcomp');
            if(BRcomp)
            var auraMethodResult = BRcomp.refresh();
           // record is changed
        } else if(eventParams.changeType === "REMOVED") {
            // record is deleted
        } else if(eventParams.changeType === "ERROR") {
            // there’s an error while loading or saving the record
        }
    },
    onBoatReviewAdded: function(component, event, helper) {
            var boatReview = event.getParam('boatReview');		
            //refresh
            var BRcomp = component.find('BRcomp');
            //console.log('BRcmp => '+ BRcomp);
            if(BRcomp)
            var auraMethodResult = BRcomp.refresh();
    
             //sets the tab
             // component.set('v.selectedTabId', 'boatreviewtab');
             component.find("details").set("v.selectedTabId", "boatreviewtab");
  
    }
})