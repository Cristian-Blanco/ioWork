const getData = () => {
    const numberDataEntry = document.getElementsByClassName('data-entry').length;
    let table = [];
    for (let index = 0; index < numberDataEntry; index++) {
        let activity = {
            'activity': document.getElementById(`activity-${index+1}`).value,
            'dependence': document.getElementById(`dependence-${index+1}`).value,
            'time': parseInt(document.getElementById(`time-${index+1}`).value,10),
            'tic': 0,
            'tfc': 0,
            'til': 0,
            'tfl': 0,
            'holgura': 0
        }
        table.push(activity);
    }
    return table;
} 

const maxActivitiesTFC = (tableSelect) => Math.max.apply(Math, tableSelect.map(function(activity) { return activity.tfc; }))
const minActivitiesTIL = (tableSelect) => Math.min.apply(Math, tableSelect.map(function(activity) { return activity.til; }))

const nearTime = (table) => {
    return table.map(function (element) {
        if(element.dependence == '-') element.tic = 0;
        else{
            let lettersDependences = element.dependence.split(",");
            let dependences = []
            //look for objects with dependencies
            lettersDependences.forEach( letter => {
                dependences.push(table.find( row => row.activity == letter))
            });
            element.tic = maxActivitiesTFC(dependences)
        }
        element.tfc = element.time + element.tic;
        return element;
    })
}

const processData = () => {
    console.log('esto es getData: ',getData())
    console.log('esto es nearTime: ', nearTime(getData()))
}


export default processData;