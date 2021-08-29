const addElement = () => {
    const numberDataEntry = document.getElementsByClassName('data-entry').length + 1;
    const dataEntry = `<div id="data-${numberDataEntry}" class='data-entry'>
                            <div><input class="form-control space-input"  placeholder="Actividad" id="activity-${numberDataEntry}" type='text'></div>
                            <div><input class="form-control space-input" placeholder="Dependencia" id="dependence-${numberDataEntry}" type='text'></div>
                            <div><input class="form-control space-input" placeholder="Tiempo" id="time-${numberDataEntry}" type='number'></div>
                       </div>`
    let principalData = document.getElementById('principal-data');
    principalData.insertAdjacentHTML("beforeend", dataEntry);
}

const removeElement = () => {
    const numberDataEntry = document.getElementsByClassName('data-entry').length;
    if(numberDataEntry == 1) return;
    const element = document.getElementById(`data-${numberDataEntry}`);
    element.parentNode.removeChild(element);
}

export { addElement, removeElement }