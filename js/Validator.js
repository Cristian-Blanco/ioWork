const emptyInput = () => {
    const numberDataEntry = document.getElementsByClassName('data-entry').length;
    console.log()
    let pass = true;
    for (let index = 0; index < numberDataEntry; index++) {
        let activity = document.getElementById(`activity-${index+1}`);
        let dependence = document.getElementById(`dependence-${index+1}`)
        let time = document.getElementById(`time-${index+1}`)
        if(activity.value == "" || activity.value == null || activity.value == undefined){
            pass = false;
            activity.classList.add('error-input')
        }else if(dependence.value == "" || dependence.value == null || dependence.value == undefined){
            activity.classList.remove('error-input')
            pass = false;
            dependence.classList.add('error-input')
        }else if(time.value == "" || time.value == null || time.value == undefined){
            activity.classList.remove('error-input')
            dependence.classList.remove('error-input')
            pass = false;
            time.classList.add('error-input')
        }else{
            activity.classList.remove('error-input')
            dependence.classList.remove('error-input')
            time.classList.remove('error-input')
        }
        if(pass == false) {alert('No deje espacios en blanco'); break;}
    }
    return pass;
}

export default emptyInput;