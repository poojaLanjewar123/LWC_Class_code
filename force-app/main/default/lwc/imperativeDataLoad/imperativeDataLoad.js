import { LightningElement, wire, track,api } from 'lwc';
import conData from "@salesforce/apex/accController.updateContact";
export default class ImperativeDataLoad extends LightningElement {

    submitButton(){
        //calling apex method imperatively 
        conData().then(res=>{
                console.log('inside success '+JSON.stringify(res));


        }).catch(err=>{

            console.log('inside error '+JSON.stringify(err));
        });

    }
    
}