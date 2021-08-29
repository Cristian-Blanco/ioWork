var listRouteCritical = [];

const getData = () => {
    listRouteCritical = []
    const numberDataEntry = document.getElementsByClassName('data-entry').length;
    let table = [];
    for (let index = 0; index < numberDataEntry; index++) {
        let activity = {
            'activity': document.getElementById(`activity-${index+1}`).value,
            'dependence': document.getElementById(`dependence-${index+1}`).value.split(","),
            'time': parseInt(document.getElementById(`time-${index+1}`).value,10),
            'tic': 0,
            'tfc': 0,
            'til': 0,
            'tfl': 0,
            'slack': 0
        }
        table.push(activity);
    }
    return table;
} 

const maxActivitiesTFC = (tableSelect) => Math.max.apply(Math, tableSelect.map(function(activity) { return activity.tfc; }))
const minActivitiesTIL = (tableSelect) => Math.min.apply(Math, tableSelect.map(function(activity) { return activity.til; }))

const nearTime = (table) => {
    return table.map(function (element) {
        if(element.dependence[0] == '-') element.tic = 0;
        else{
            let dependences = [];
            //look for objects with dependencies
            element.dependence.forEach( letter => {
                dependences.push(table.find( row => row.activity == letter));
            });
            element.tic = maxActivitiesTFC(dependences);
        }
        element.tfc = element.time + element.tic;
        return element;
    })
}

const farTime = (table) => {
    const fartime = table.reverse().map(function (element) {
        //we look for dependencies that have the activity
        let activities = table.filter(activity => activity.dependence.includes(element.activity))
        
        if(activities.length == 0) element.tfl = maxActivitiesTFC(table);
        else element.tfl = minActivitiesTIL(activities);
        element.til = element.tfl - element.time;
        return element;
    })
    return fartime.reverse()
}

const slack = (table) => {
    return table.map(function (element) {
        element.slack = element.tfl - element.tfc;
        return element;
    })
}

const routeCriticals = (letter, route, tableSlack, actualList = []) => {
    const exist = tableSlack.find(row => row.activity == letter);
    if(!exist) return false;
    if(listRouteCritical.length == 0) listRouteCritical.push([letter])
    else {
        if(listRouteCritical.length < route){//create new route
            actualList = [...actualList, letter]
            listRouteCritical = [...listRouteCritical, actualList]
        }else{
            listRouteCritical[route-1] = [...listRouteCritical[route-1], letter]
        }
    }     
    //we take the current list in case there is another critical path
    actualList = listRouteCritical[route - 1];
    exist.dependence.forEach(newLetter => {
        route = routeCriticals(newLetter, route, tableSlack, actualList) ? route + 1 : route;
    });
    return true;
}

const processData = () => {
    let process = getData();
    process = nearTime(process);
    process = farTime(process);
    process = slack(process);
    const tableSlack = process.filter(row => row.slack == 0);
    let lastLetters = [];
    tableSlack.forEach(element =>{
        let hola = tableSlack.find( row => row.dependence.includes(element.activity))
        !hola && lastLetters.push(element.activity) 
    })
    lastLetters.forEach(letter => {
        routeCriticals(letter, listRouteCritical.length + 1, tableSlack);
    })
    return {
        'process': process,
        'lastLetters': lastLetters,
        'listRouteCritical': listRouteCritical
    }
}


export default processData;