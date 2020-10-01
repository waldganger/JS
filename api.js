'use strict'

const api = 'https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-sise-effectifs-d-etudiants-inscrits-esr-public&q=&rows=4841&facet=rentree_lib&facet=etablissement_type2&facet=etablissement_type_lib&facet=etablissement_lib&facet=identifiant_eter&facet=champ_statistique&facet=operateur_lib&facet=localisation_etab&facet=localisation_ins&facet=bac_lib&facet=attrac_intern_lib&facet=dn_de_lib&facet=cursus_lmd_lib&facet=diplome_lib&facet=niveau_lib&facet=disciplines_selection&facet=gd_disciscipline_lib&facet=discipline_lib&facet=sect_disciplinaire_lib&facet=reg_etab_lib&facet=com_ins_lib&facet=uucr_ins_lib&facet=dep_ins_lib&facet=aca_ins_lib&facet=reg_ins_lib&refine.rentree_lib=2018-19&refine.etablissement_lib=Universit%C3%A9+de+Pau+et+des+Pays+de+l%27Adour';

// const test = 'https://data.enseignementsup-recherche.gouv.fr/api/records/1.0/search/?dataset=fr-esr-sise-effectifs-d-etudiants-inscrits-esr-public&q=&rows=4841&facet=rentree_lib&facet=etablissement_type2&facet=etablissement_type_lib&facet=etablissement_lib&facet=identifiant_eter&facet=champ_statistique&facet=operateur_lib&facet=localisation_etab&facet=localisation_ins&facet=bac_lib&facet=attrac_intern_lib&facet=dn_de_lib&facet=cursus_lmd_lib&facet=diplome_lib&facet=niveau_lib&facet=disciplines_selection&facet=gd_disciscipline_lib&facet=discipline_lib&facet=sect_disciplinaire_lib&facet=reg_etab_lib&facet=com_ins_lib&facet=uucr_ins_lib&facet=dep_ins_lib&facet=aca_ins_lib&facet=reg_ins_lib&refine.rentree_lib=2018-19&refine.etablissement_lib=Universit%C3%A9+de+Pau+et+des+Pays+de+l%27Adour';

// console.log(api === test);


const effectif = fetch(api)
.then(response => response.json()
.then(raw => Object.values(raw)[2].map(el => el.fields.effectif).reduce((sum, current) => sum + current, 0)))
.then(el => console.log(`effectifs totaux : ${el}`));


// const data = fetch(api)
//     .then(res => res.json())
//     .then((done) => {
//         console.log(done);
//         return done;
//     });

// data.then( el => Object.values(el)[2].map( el => el.fields))