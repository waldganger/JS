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
    return set;
}

console.log(disciplinesList(json).has("Histoire"));