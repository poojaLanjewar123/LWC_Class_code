import { LightningElement } from 'lwc';

export default class DisconnectedCallbackChildLwc extends LightningElement {
    disconnectedCallback() {
        console.log('child disconnected callback')
    }
}