({
	doInit : function(component, event, helper) {
        component.get("v.boatTypeId");
        helper.onSearch(component);
    },
    search: function(component, event, helper){
        //console.log("BSRController: search called");
        var params = event.getParam('arguments');
        if (params) {
        console.log("boatTypeId extracted: " + params.boatTypeId);
        component.set("v.boatTypeId", params.boatTypeId);
        helper.doSearch(component);
        return "search complete.";
        }
    },
    onBoatSelect:function(component, event, helper){
        var boatId = event.getParam('boatId');
        console.log('recieved boatId => ' + boatId);
        component.set("v.selectedBoatId",boatId);
    },
    
})