import { LightningElement,api } from 'lwc';

export default class ChildLightningWebComp extends LightningElement {

    @api varWithApi;
    varWithoutApi;
    connectedCallback(){
        console.log('inside connected Call Back function varWithApi '+this.varWithApi);
        console.log('inside connected Call Back function  varWithoutApi '+this.varWithoutApi);
    }
    @api childMethod() {
        this.varWithoutApi = "Ram"
    }
}