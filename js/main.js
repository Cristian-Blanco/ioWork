import { addElement, removeElement } from './DynamicInputs.js';
import processData from './CriticalRouteTable.js';
import PrintResult from './PrintResult.js';

document.getElementById('plus').addEventListener('click', function(){
    addElement();
})

document.getElementById('minus').addEventListener('click', function(){
    removeElement();
})

document.getElementById('resolve').addEventListener('click', function(){
    const table = processData();
    const pt = new PrintResult(table);
    document.getElementById('form-data-input').hidden = true;
    document.getElementById('result-critical-route').hidden = false;
    document.getElementById('table-info').innerHTML = pt.printTable();
    document.getElementById('critical-route').innerHTML = pt.printCriticalRoutes();

})

document.getElementById('back').addEventListener('click', function () {
    document.getElementById('form-data-input').hidden = false;
    document.getElementById('result-critical-route').hidden = true;
})
