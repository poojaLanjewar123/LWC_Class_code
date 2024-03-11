public with sharing class AccountToContacts {
    @AuraEnabled(cacheable=true)
    public static list<Account> accountRecord() {
        list<Account> accListData = [select id, name,Phone from account limit 20];
        return accListData;
    
    }
}