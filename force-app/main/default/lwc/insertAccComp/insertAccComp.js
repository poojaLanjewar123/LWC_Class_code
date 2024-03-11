import { LightningElement } from 'lwc';
import apexInsert from "@salesforce/apex/insertAccClass.insertAccMethod";

export default class InsertAccComp extends LightningElement {
    inputVar;
    inputVar2;
    inputVar3;
    handleChangeInput1(event){
        console.log('inside insert input '+event.target.value);
        this.inputVar=event.target.value;
    }
    handleChangeInput2(event){
        console.log('inside insert input '+event.target.value);
        this.inputVar2=event.target.value;
    }
    handleChangeInput3(event){
        console.log('inside insert input '+event.target.value);
        this.inputVar3=event.target.value;
    }
    inertMethod(event){
        console.log('inside insert button '+this.inputVar);
        var accObj = {};
        accObj.Name = this.inputVar;
        accObj.Phone = this.inputVar2;
        accObj.Indusrty = this.inputVar3;
        alert('Account Object '+JSON.stringify(accObj));
        apexInsert({
            acc : accObj
        }).then(res=>{
            console.log('search success'+JSON.stringify(res));
        }).catch(err=>{
            console.log('search failed'+JSON.stringify(err));
        });
    }
    
}