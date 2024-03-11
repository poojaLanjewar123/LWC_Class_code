public with sharing class accController {
    @AuraEnabled(cacheable=true)
    public static list<Account> accList(){
      list<Account> accListData = [select id, name from account limit 10];
      return accListData;

    }  

     @AuraEnabled 
    public static list<contact> updateContact(){
        system.debug('inside contact method');
        list<contact> conList = [select id, LastName from contact limit 10];
        update conList;
        return conList;
        
    }
}