const json = require('./sise.json');

// retourne les fte totaux
function fte(data){
    return Object.values(data).map(el => el.fields.effectif).reduce((sum, curr) => sum + curr, 0);
}

function fieldList(data){
    let set = new Set();
    for(let el of Object.values(data)){
        for (let f of Object.keys(el.fields)){
            set.add(f);
        }
    }
    return set;
}

function disciplinesList(data){
    let set = new Set;
    Object.values(data).map(el => set.add(el.fields.sect_disciplinaire_lib));
    return Array.from(set);
}

function fteDiscipline(data, disc){
    return Object.values(data).filter(el => el.fields.sect_disciplinaire_lib == disc)
    .map(el => el.fields.effectif)
    .reduce((sum, current) => sum + current, 0);
}

function printFteByDiscipline(data){
    console.table(
        disciplinesList(data).map(disc => {
            return {
                "Discipline": disc,
                "FTE": fteDiscipline(data, disc)
            };
        }));
}

printFteByDiscipline(json);

function totalFte(data){
    
    return disciplinesList(data).map(disc => fteDiscipline(data, disc)).reduce((sum, current) => sum + current, 0);
}

// TESTS
// console.log(totalFte(json) === fte(json));
// console.log(totalFte(json));
// console.log( fteDiscipline(json, 'Informatique') );
// Object.values(json).forEach(el => console.log(el));
// console.log(disciplinesList(json));