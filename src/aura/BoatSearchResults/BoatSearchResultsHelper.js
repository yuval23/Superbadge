({
	doSearch : function(component, event, helper) {
        component.get("v.boatTypeId");
        this.onSearch(component);
    },
	onSearch : function(component) {
		var boatTypeId = component.get("v.boatTypeId");
		console.log('onSearch invoke Apex + ' + boatTypeId);
		var action = component.get("c.getBoats");
        action.setParams({ 'boatTypeId': boatTypeId });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
				var boats = response.getReturnValue();
				//console.log('data comes from getBoats => ' + JSON.stringify(boats));
				component.set("v.boats", boats);   
				component.set("v.noResults", false);

				if(boats.length === 0 || boats ===''){
					console.log('MSG => ' + JSON.stringify(boats));
					component.set("v.noResults", true);				
				}
			}
			else {
				component.set("v.noResults", true);
			}
        });
        $A.enqueueAction(action);  
	},
})