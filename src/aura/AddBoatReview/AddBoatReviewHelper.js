({
	onInit: function(component,event){

       console.log('onInit Helper funciton in ' + event.changeType);
       
       component.find("service").getNewRecord(
                "BoatReview__c", // sObject type (objectApiName)
                null,      // recordTypeId
                false,     // skip cache?
            $A.getCallback(function() {
                var boat = component.get("v.boat");
       			component.set("v.boatReview.Boat__c", boat.Id);
                var rec = component.get("v.record");
                var error = component.get("v.recordError");
                if(error || (rec === null)) {
                    console.log("Error initializing record template: " + error);
                    return;
                }
               console.log("OnInit: " + JSON.stringify(rec.fields.Boat__c) + 'Was populated');
            })
        );
    },
    
})