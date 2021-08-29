const addElement = () => {
    const numberDataEntry = document.getElementsByClassName('data-entry').length + 1;
    const dataEntry = `<div id="data-${numberDataEntry}" class='data-entry'>
                            <div><input class="form-control space-input"  placeholder="Actividad" id="activity-${numberDataEntry}" type='text' required></div>
                            <div><input class="form-control space-input" placeholder="Dependencia" id="dependence-${numberDataEntry}" type='text' required></div>
                            <div><input class="form-control space-input" placeholder="Tiempo" id="time-${numberDataEntry}" type='number' required></div>
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

const restartElement = () => {
    const html = `<div id="data-1" class="data-entry">
                    <div class="first-info">
                        <div>
                            <p class="fs-3">Actividad</p>
                            <input class="form-control space-input" placeholder="Actividad" id="activity-1" type="text" required>
                        </div>
                        <div>
                            <p class="fs-3">Dependencia</p>
                            <input class="form-control space-input" placeholder="Dependencia" id="dependence-1" type="text" required>
                        </div>
                        <div>
                            <p class="fs-3">Duracion t(i-j)</p>
                            <input class="form-control space-input" placeholder="Tiempo" id="time-1" type="number" required>
                        </div>
                    </div>
                </div>`
    document.getElementById('principal-data').innerHTML = html;
}

export { addElement, removeElement, restartElement }