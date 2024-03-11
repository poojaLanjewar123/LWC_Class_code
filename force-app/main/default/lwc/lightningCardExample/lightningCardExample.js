import { LightningElement } from 'lwc';

export default class LightningCardExample extends LightningElement {
    callJsMethod(event){
        alert('this is on Icon click '+event.target.dataset.recid);
        alert('this is on 2nd alert '+event.target.getAttribute("data-recid"));
    }
    callJsMethod1(){
        alert('this is button icon');
    }
}