export default class PrintResult {

    constructor(table){
        this.table = table;
    }

    printTable(){
        const title = `<tr>
                            <th>Actividad</th>
                            <th>Predecesora(s)</th>
                            <th>Duración</th>
                            <th>Tiempo Inicial Cercano</th>
                            <th>Tiempo Final Cercano</th>
                            <th>Tiempo inicial Lejano</th>
                            <th>Tiempo Final Lejano</th>
                            <th>Holgura</th>
                        </tr>`
        let content = ``;
        this.table.process.forEach(element => {
            content = content + ` 
                <tr>
                    <td>${element.activity}</td>
                    <td>${element.dependence.join(' - ')}</td>
                    <td>${element.time}</td>
                    <td>${element.tic}</td>
                    <td>${element.tfc}</td>
                    <td>${element.til}</td>
                    ${this.table.lastLetters.find(letter => letter == element.activity) ? 
                        `<td class="table-primary">${element.tfl}</td>` :
                        `<td>${element.tfl}</td>`
                    }
                    ${element.slack == 0 ?
                        `<td class="table-warning">${element.slack}</td>` :
                        `<td>${element.slack}</td>`
                    }
                    
                </tr>
            `;
        });

        return `<table class="table table-dark table-hover align-content-table">
                    ${title}
                    ${content}
                </table>`
    }

    printCriticalRoutes(){
        let htmlList = ``;
        const trueOrderRouteCritical = this.table.listRouteCritical.map(element => element.reverse())
        trueOrderRouteCritical.forEach(element => {
            htmlList = htmlList + `
                <li class="fs-4 color-text-list">${element.join(" - ")}</li>
            `
        })
        return `
                <p class="fs-3 color-title-list">Rutas Criticas</p>
                <ul>
                    ${htmlList}
                </ul>`
    }
}