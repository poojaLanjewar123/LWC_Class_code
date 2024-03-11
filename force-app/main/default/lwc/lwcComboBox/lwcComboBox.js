import { LightningElement } from 'lwc';

export default class LwcComboBox extends LightningElement {
    value = 'inProgress';
    get strMethod(){
        
        return 'abcd';
    }
    get optionsValues() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}
