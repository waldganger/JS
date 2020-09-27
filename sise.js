const json = require('./sise.json');

// import * as json from "file://C:/Users/antony/OneDrive -/programmation/apprentissage/JS/sise.json";

// retourne les fte totaux
function fte(data){
    return Object.values(data).map(el => el.fields.effectif).reduce((sum, curr) => sum + curr, 0);
}

function listeFields(data){
    let set = new Set();
    for(let el of Object.values(data)){
        for (let f of Object.keys(el.fields)){
            set.add(f);
        }
    }
    return Array.from(set);
}

function listeDisciplines(data){
    let set = new Set;
    Object.values(data).map(el => set.add(el.fields.sect_disciplinaire_lib));
    return Array.from(set);
}

function listeSite(data) {
    let set = new Set;
    Object.values(data).map(el => set.add(el.fields.com_ins_lib));
    return Array.from(set);
}

function listeAllPropertiesValues(data){        
    let resultat = {};
    listeFields(data).map(prop => resultat[prop] = listePropertyValues(data, String(prop)));
    return resultat;
}

function listePropertyValues(data, property){
    let set = new Set;
    Object.values(data).map(el => set.add(el.fields[property]));
    return Array.from(set);
}

function fteDiscipline(data, disc){
    return Object.values(data).filter(el => el.fields.sect_disciplinaire_lib == disc)
    .map(el => el.fields.effectif)
    .reduce((sum, current) => sum + current, 0);
}

function printFteByDiscipline(data){
    console.table(
        listeDisciplines(data).map(disc => {
            return {
                "Discipline": disc,
                "FTE": fteDiscipline(data, disc)
            };
        }));
}

function totalFte(data){
    return listeDisciplines(data).map(disc => fteDiscipline(data, disc)).reduce((sum, current) => sum + current, 0);
}

// TESTS
console.log(listeAllPropertiesValues(json));
// console.log(listeFields(json));
// console.log(listePropertyValues(json, "gd_disciscipline"));
// console.log(listeSite(json));
// printFteByDiscipline(json);
// console.log(totalFte(json) === fte(json));
// console.log(totalFte(json));
// console.log( fteDiscipline(json, 'Informatique') );
// Object.values(json).forEach(el => console.log(el));
// console.log(listeDisciplines(json));