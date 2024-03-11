public with sharing class accClass {
    @AuraEnabled(cacheable=true)
    public static list<Account> accList(){
      List<Account> accListData = [Select Id,Name from Account limit 10];
      return accListData;

    }  

}