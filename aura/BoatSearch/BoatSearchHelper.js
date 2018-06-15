({
	getBoats : function(component,boatTypeId) {
		//var boatTypeId = component.get("v.boatTypeId");  
		var action = component.get("c.getBoats");
		console.log('received getBoats boatType => ' + boatTypeId);
		if(boatTypeId === ''){boatTypeId = 'a01f200000wN42BAAS'}
        action.setParams({ 'boatTypeId': boatTypeId });
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
				var boats = response.getReturnValue();
				console.log('data comes from getBoats => ' + JSON.stringify(boats));
				component.set("v.boats", boats);   
			//	component.set("v.noResults", false);

				if(boats.length === 0 || boats ===''){
					console.log('MSG => ' + JSON.stringify(boats));
					//component.set("v.noResults", true);				
				}
			}
			else {
			//	component.set("v.noResults", true);
			}
        });
        $A.enqueueAction(action);  
	},
})