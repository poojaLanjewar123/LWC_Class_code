import { LightningElement } from 'lwc';

export default class ParentLightningWebComp extends LightningElement {

    parentMethod(){
        this.template.querySelector('c-child-lightning-web-comp').childMethod();
    }
}