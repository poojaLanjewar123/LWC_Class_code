import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigateLwc extends NavigationMixin(LightningElement) {
    navigateToWebPage(){
        this[NavigationMixin.Navigate]({    
            "type": "standard__webPage",
            "attributes": {
                "url": "https://salesforce.com"
            }
        });
    }
    navigateToRecordDetail(){
        this[NavigationMixin.Navigate]({    
            "type": "standard__recordPage",
            "attributes": {
                "recordId": "0065j00001Y2afbAAB",
                "objectApiName": "Opportunity",
                "actionName": "view"
            }
        });
     
    }
    navigateForEdit(){
        this[NavigationMixin.Navigate]({    
            "type": "standard__recordPage",
            "attributes": {
                "recordId": "0065j00001Y2afbAAB",
                "objectApiName": "Opportunity",
                "actionName": "edit"
            }
     });
            
    }
    navigateToNewButton(){
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "new"
            },
            state: {
                defaultFieldValues : "AccountNumber=Abc123,Name=testAcName,NumberOfEmployees=35000,Industry=Banking",
                nooverride: "1"
            }
        });
    }
}