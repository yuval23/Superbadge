({
    loadOptions: function (component, event, helper) {
        var isEnabled = $A.get("e.force:createRecord");
    		console.log(isEnabled);
          if (isEnabled) {
            component.set('v.showNewButton',true);
          }
    	var action = component.get("c.getBoatTypeOptions");
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                var types = response.getReturnValue();
                //console.log('PUSHED by loadOptions @BoatSearchForm => ' + JSON.stringify(types));
                component.set("v.BoatTypeOptions", types);   
            }
        });
        $A.enqueueAction(action);  
    },
    onFormSubmit: function (component, event, helper) {
        var selectedId = component.get('v.boatTypeId');
        var formData = {'boatTypeId':selectedId};
        component.set('v.formData',formData);
		
        var boatTypeEvent = component.getEvent("formsubmit");
        boatTypeEvent.setParams({"formData" : formData });
        boatTypeEvent.fire();  
        //helper.fireEvent(component);       
        
    },
    onSelect: function (component, event, helper) {
        var selectedId = component.get('v.boatTypeId');
        //component.find('selectType').get('v.value');
        //event.getSource().get('v.value');
       // component.set('v.boatTypeId',selectedId);
        var formData = {
                        'boatTypeId':selectedId
                        };
        component.set('v.formData',formData);
       
    },
    addNew: function (component, event, helper) {
   		 var selected = component.get('v.boatTypeId');
            
        var createRecordEvent = $A.get("e.force:createRecord");
            if(createRecordEvent){
                if(selected !== ''){
                    createRecordEvent.setParams({
                        "entityApiName": "Boat__c",
                        "defaultFieldValues": {
                            'BoatType__c' : component.get('v.boatTypeId'),
                        }
                    });
                }
                else {
                     createRecordEvent.setParams({
                        "entityApiName": "Boat__c"               
                    });
                }
            createRecordEvent.fire();
            }
    },
    
})