({

    createRecord : function (component, event, helper) {
    var createRecordEvent = $A.get("e.force:createRecord");
    createRecordEvent.setParams({
        "entityApiName": "BoatType__c",
        "defaultFieldValues": {
            'BoatType__c' : typeId,
            'Name' : typeName
    	}
    });
    createRecordEvent.fire();
	}
})