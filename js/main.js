import { addElement, removeElement } from './DynamicInputs.js';
import processData from './CriticalRouteTable.js';

document.getElementById('plus').addEventListener('click', function(){
    addElement();
})

document.getElementById('minus').addEventListener('click', function(){
    removeElement();
})

document.getElementById('resolve').addEventListener('click', function(){
    processData();
})

