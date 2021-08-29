import { addElement, removeElement, restartElement } from './DynamicInputs.js';
import processData from './CriticalRouteTable.js';
import PrintResult from './PrintResult.js';
import emptyInput from './Validator.js';

document.getElementById('plus').addEventListener('click', function(){
    addElement();
})

document.getElementById('minus').addEventListener('click', function(){
    removeElement();
})

document.getElementById('restart').addEventListener('click', function(){
    restartElement()
})

document.getElementById('resolve').addEventListener('click', function(){
    if(!emptyInput()) return;
    const table = processData();
    const pr = new PrintResult(table);
    document.getElementById('form-data-input').hidden = true;
    document.getElementById('result-critical-route').hidden = false;
    document.getElementById('table-info').innerHTML = pr.printTable();
    document.getElementById('critical-route').innerHTML = pr.printCriticalRoutes();
})

document.getElementById('back').addEventListener('click', function () {
    document.getElementById('form-data-input').hidden = false;
    document.getElementById('result-critical-route').hidden = true;
})
