import { LightningElement,wire } from 'lwc';
import {
    subscribe,
    unsubscribe,
    APPLICATION_SCOPE,
    MessageContext,
  } from "lightning/messageService";
  import recordSelected from "@salesforce/messageChannel/abcd__c";
export default class SubscrberLwc extends LightningElement {
    @wire(MessageContext) contextMsg;
    connectedCallback(){
        this.subscribeToMessageChannel();
    }
    subscribeToMessageChannel() {
        if (!this.subscription) {
          this.subscription = subscribe(
            this.contextMsg,
            recordSelected,
            (message) => this.handleMessage(message),
            { scope: APPLICATION_SCOPE },
          );
        }
      }
      handleMessage(msg){
            console.log('this is subscriber component '+msg.recordName+' '+msg.recordData);
      }
}