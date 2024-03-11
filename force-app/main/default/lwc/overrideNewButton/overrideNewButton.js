import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class OverrideNewButton extends NavigationMixin(LightningElement) {
    connectedCallback(){
        this.overrideMethod();
    }
    overrideMethod(){
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Account",
                actionName: "new"
            },
            state: {
                defaultFieldValues : "AccountNumber=9999999,CustomCheckbox__c=true,Name=LwcOverrideNewButton,NumberOfEmployees=35000,Phone=123456789",
                nooverride: "1"
            },
        });
    }
}    