({
    doInit:function(component, event, helper) { 
       // var button = component.find("fullDetailsButton");
        var isEnabled = $A.get("e.force:navigateToSObject");
    		console.log(isEnabled);
          if (isEnabled) {
              component.set('v.showButton',true);
          }
        else {
              component.set('v.showButton',false);
        }
    },
    onFullDetails: function(component, event, helper) {
        
        var button = component.find("fullDetailsButton");
        var record = component.get('v.boat');
        var navEvt = $A.get("e.force:navigateToSObject");
      
        navEvt.setParams({
          "recordId": record.Id,
          "slideDevName": "related"
        });
        navEvt.fire();
    },
    
})