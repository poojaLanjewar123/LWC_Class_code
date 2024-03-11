public with sharing class insertAccClass {
    @AuraEnabled
    public static Account insertAccMethod(Account acc){
       insert acc;
       return acc;
    }
}