import { LightningElement } from 'lwc';
import getAccRecord from "@salesforce/apex/searchClassLwc.accSearchMethod";

export default class ParentLwc extends LightningElement {
    searchCildData;
    parentMethod(){
        console.log('in side parent method');
        this.template.querySelector('c-child-lwc').abcd();
    }
    handleChildJsValue(event){
        console.log('inside Parent js '+event.detail);

        this.searchCildData = event.detail;
        console.log('inside Parent js '+this.searchCildData);
        getAccRecord({
            accName : this.searchCildData
        }).then(res=>{
            console.log('search success'+JSON.stringify(res));
        }).catch(err=>{
            console.log('search failed'+JSON.stringify(err));
        });
    }
}