let input = null;
do {
    input = prompt("Entrez un nombre > à 100", '');
} while (isNaN(+input) || input <= 100);

// outer: for (let l = 0; l < 10; l++) {
//     for (let c = 0; c < 10; c++) {
//         let input = prompt(`[${l}] [${c}]`);
//         if (!input) break outer
//     }
// }



// let x = 0;

// do {
//     alert(x);
//     x++;
// } while (x < 3);

// let x = (1 && 2) ?? 3;
// alert(x);


// const a = 3;
// const b = 4;
// let a = 3;
// let b = 6;
// const result = (a + b < 4) ? 'below': 'Over';

// alert(result);

// let answer = prompt("Quel est le nom officiel de JavaScript ?", '');

// if (answer == "ECMAScript") {
//     alert("Bonne réponse !")
// } else {
//     alert("Mauvaise réponse !")
// }

// let accessAllowed = false;

// let age = prompt("Etes-vous majeur ?", "Entrez votre age");

// accessAllowed = (age >= 18)? true : false;
// alert(accessAllowed);

// let a = prompt("First number ?", 1);
// let b = prompt("First number ?", 2);

// alert(+a + +b);

// let nom = prompt("Entrez votre nom", "ici");
// let age = 2**8;

// alert(`Bonjour ${nom}, vous avez ${age} ans.`);