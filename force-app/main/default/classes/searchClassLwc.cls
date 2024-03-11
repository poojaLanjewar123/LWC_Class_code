public with sharing class searchClassLwc {
    @AuraEnabled
    public static list<Account> accSearchMethod(String accName){
        string key = '%' + accName + '%';
        list<account> accList = [select id, name from account where name LIKE: key WITH SECURITY_ENFORCED];
        return accList;
    }
    
}