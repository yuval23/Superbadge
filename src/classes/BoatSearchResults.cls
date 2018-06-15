public with sharing class BoatSearchResults {

    @AuraEnabled 
    public static List<BoatType__c> getBoatTypeOptions() {
        BoatType__c[] types = [Select Id,Name From BoatType__c ];
        return types;
    }
    
    @AuraEnabled 
    public static List<Boat__c> getBoats(String boatTypeId) {
       // Id boatTypeId
       System.debug('boatTypeId ==> ' + boatTypeId);
       Boat__c[] boats = new List<Boat__c>();
        if(String.isEmpty(boatTypeId)){ 
             boats = [Select Id,Name, BoatType__c, Contact__c,Contact__r.Name, Description__c,Picture__c , Length__c,Price__c,Geolocation__Latitude__s,Geolocation__Longitude__s,Year_Built__c 
                           From Boat__c ];
            }
        else {
           boats = [Select Id,Name, BoatType__c, Contact__c, Description__c,Picture__c , Geolocation__Latitude__s,Geolocation__Longitude__s,Length__c,Price__c,Year_Built__c 
                           From Boat__c WHERE BoatType__c =: boatTypeId];
        }
        return boats;
    }
    
 
}