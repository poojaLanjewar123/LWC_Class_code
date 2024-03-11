import { LightningElement,api } from 'lwc';

export default class ChildLwc extends LightningElement {

    @api childvar;
    childData;
    varchild;
    connectedCallback(){
        console.log('inside child method '+this.childvar);
        console.log('inside 2nd child var '+this.varchild);
    }
    @api abcd(){
        console.log('inside child method abcd ');
        this.childvar= 'xyz';
    }
    handleChange(event){
        this.childData = event.target.value;
        console.log('search input value '+this.childData);
    }
     childJsMethod(){
        const selectedEvent = new CustomEvent("progressvaluechange", {
            detail: this.childData

          });
            // Dispatches the event.
          this.dispatchEvent(selectedEvent);
    }
    
     
}