({
	onInit: function(component,event){
	   var boat = component.get("v.boat") 
       var action = component.get("c.getAll");  
        action.setParams({ boatId : boat.Id });  
        action.setCallback(this, function(response) {  
        var state = response.getState();  
        if (state === "SUCCESS") {  
            //console.log('getAll Apex is working => ' + response.getReturnValue());
            var items = response.getReturnValue();
            component.set('v.boatReviews', items);	
           
        }
            else if (state === "INCOMPLETE") {
                // do something
            }
                else if (state === "ERROR") {
                    var errors = response.getError();
                    if (errors) {
                        if (errors[0] && errors[0].message) {
                            console.log("Error message: " + 
                                        errors[0].message);
                        }
                    } else {
                        console.log("Unknown error");
                    }
                }
        });  
        $A.enqueueAction(action);  
    },
})