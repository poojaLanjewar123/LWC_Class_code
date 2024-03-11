import { LightningElement } from 'lwc';
import comp2 from 'c/pubSubFile' ; 
export default class PubsubSubscriber extends LightningElement {

    message;
    connectedCallback(){
        this.register();
    }
    register(){
        window.console.log('event registered ');
        comp2.register('simplevt', this.handleEvent.bind(this));
    }
    handleEvent(messageFromEvt){
        window.console.log('event handled ',messageFromEvt);
        this.message = messageFromEvt ? JSON.stringify(messageFromEvt, null, '\t') : 'no message payload';
    }
}