import { LightningElement } from 'lwc';

export default class DisconnectedCallbackParentLwc extends LightningElement {
    show = true;
    handleShowHide() {
        this.show = false;
    }
}