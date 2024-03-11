import { LightningElement, wire } from 'lwc';
import { publish, MessageContext } from "lightning/messageService";
import recordSelected from "@salesforce/messageChannel/abcd__c";

export default class PublisherLightningComp extends LightningElement {
    @wire(MessageContext) msgContext;
    handlePublish(){
        publish(this.msgContext,recordSelected,{recordName:"this is record name Lwc",recordData:"this is record data lwc"});
    }
}