({
	onFormSubmit: function(component, event, helper) {
		var formData = event.getParam('formData');
        //console.log('BoatSearch onFormSubmit received formData.boatTypeId => ' + formData.boatTypeId);
         
        component.set("v.formData",formData);
 
        var boatTypeId = formData.boatTypeId;
        var BSRcmp = component.find("BSRcmp");
        var auraMethodResult = BSRcmp.search(boatTypeId);
        console.log("auraMethodResult: " + auraMethodResult);
        component.set("v.searchText",auraMethodResult);  

    },
   
    
})