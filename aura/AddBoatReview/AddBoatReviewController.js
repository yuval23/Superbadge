({
	doInit: function(component, event, helper) {
        helper.onInit(component,event);
	},
    onSave: function(component, event, helper) {
	   component.find("service").saveRecord($A.getCallback(function(saveResult) {
            if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {

                    var compEvent = component.getEvent("BoatReviewAdded");
                    compEvent.setParams({"boatReview" : saveResult });
                    compEvent.fire();    

                    var isEnabled = $A.get("e.force:showToast");
                    if(isEnabled){
                        var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "title": "Success!",
                            "message": "The record has been Saved successfully."
                        });
                        toastEvent.fire();
                        helper.onInit(component,event);
                    }
                    else {
                        alert('not available');
                    }
                	

            } else if (saveResult.state === "INCOMPLETE") {

                console.log("User is offline, device doesn't support drafts.");

            } else if (saveResult.state === "ERROR") {

                console.log('Problem saving record, error: ' + JSON.stringify(saveResult.error));

            } else {

                console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));

            }
            
            

        }));

	},
    onRecordUpdated :function(component, event, helper) {
       // var rating = event.getParam('value');
        console.log('onValueChange ' + rating);
		var recordError = component.get('v.recordError');
         var changeType = event.getParams().changeType;

        if (changeType === "ERROR") { 
        	component.SET('v.recordError',changeType);
        }
        else if (changeType === "LOADED") { 
        	console.log('AddBoatReview LOADED');
        }
            else if (changeType === "REMOVED") { /* handle record removal */ }
                else if (changeType === "CHANGED") { 
                    var isEnabled = $A.get("e.force:showToast");
                    if(isEnabled){
                        var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "title": "Success!",
                            "message": "The record has been Saved successfully."
                        });
                        toastEvent.fire();
                        helper.onInit(component,event); 
                    }
                }
        

	},
})