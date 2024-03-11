import { LightningElement } from 'lwc';
import myResource from "@salesforce/resourceUrl/BMW";
export default class FirstLWC extends LightningElement {
    watchImg = myResource;
    abcd(){
        console.log('This is first js');
    }
    constructor(){
        super();
        console.log('inside constuctor');
    }
    connectedCallback() {

        console.log('inside connected call back');
    }
    renderedCallback(){
        console.log('inside rendered call back');
    }


}