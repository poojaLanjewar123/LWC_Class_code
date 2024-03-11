import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { updateRecord } from 'lightning/uiRecordApi';
import apexRecord from "@salesforce/apex/AccountToContacts.accountRecord";
import LASTNAME_FIELD from "@salesforce/schema/Contact.LastName";
import EMAIL_FIELD from "@salesforce/schema/Contact.Email";
import ID_FIELD from "@salesforce/schema/Contact.Id";
export default class AccountRecordContact extends LightningElement {

    result;
    recordId;
    handleRecord(){
        
        apexRecord().then(res=>{
            console.log('successfully insert '+JSON.stringify(res));
            this.result = res;
        }).catch(err=>{
            console.log('error found '+JSON.stringify(err));
        });
    }
    /*handleDelete(event){
        this.recordId = event.target.dataset.id;
        deleteRecord(this.recordId).then(res=>{
            console.log('inside success '+JSON.stringify(res));
        }).catch(err=>{
            console.log('inside success '+JSON.stringify(err));
        });
    }
    handleUpdate(){
        const fields = {};
        fields[ID_FIELD.fieldApiName] = this.recordId;
        fields[LASTNAME_FIELD.fieldApiName] = 'fromJsContact';
        fields[EMAIL_FIELD.fieldApiName] = 'abc@gmail.com';

        const recordInput = { fields };
        updateRecord(recordInput).then().catch();
    }
    handleview(){
        
    }*/
}