'use strict'

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let doSomething = i * i * i;
}

let end = new Date();

console.log(end - start);

// let date = new Date();

// date.setFullYear(2020, 6, 17);

// let naissance = new Date();
// naissance.setFullYear(2017, 6, 17);

// console.log(Math.floor((date - naissance) / (3600 * 1000 * 24 * 365)));

// date.setDate(1);
// console.log(date);

// let Local = new Date();

// console.log(Local.getHours());
// console.log(Local.getUTCHours());
// console.log((Local.getTime()) / (1000 * 3600 * 24 * 365));
// console.log(Local.getDay());

// 0 means 01.01.1970 UTC+0
// let Jan01_1970 = new Date(0);
// alert( Jan01_1970 );

// console.log(Jan01_1970.getFullYear());


// let now = new Date();
// console.log( now);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
//   "Barry": 300
// };

// function topSalaries(salaries) {

//   let max = 0;
//   let maxName = null;

//   for(const [name, salary] of Object.entries(salaries)) {
//     if (max < salary) {
//       max = salary;
//       maxName = name;
//     }
//   }

//   return maxName;
// }

// function topSalaries(obj) {
//   if (!Object.keys(obj)) {
//     return null
//   } else {
//     let max = 0;
//     let resultat = [];
//     for (let [key, value] of Object.entries(obj)) {
//       if (value > max) {
//         max = value;
//         resultat.splice(0, 1, key);
//       } else if (value == max) {
//         resultat.push(key);
//       }
//   }
//   return resultat;
// }
// }

// console.log(topSalaries(salaries));

// let user = {
//   name: "John",
//   years: 30
// };


// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false


// let arr = ["Antony", "Merle"];

// let [prenom, nom] = arr;

// let user = {};

// [user.prenom, user.nom] = "Antony Merle".split(' ');

// console.log(user.prenom);
// console.log(user.nom);

// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2

// function count(obj) {
//   return Object.keys(obj).length;
// }

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// alert( sumSalaries(salaries) ); // 650

// function sumSalaries(obj) {
//   // let sum = 0;
//   // for (let salary of Object.values(obj)) {
//   //   sum += salary;
//   // }
//   // return sum;
//   return Object.values(obj).reduce((accumulator, current) => accumulator + current, 0);
// }

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let dates = [
//   {jour: "1/1/20", heure: "15:30"},
//   {jour: "2/1/20", heure: "15:45"},
//   {jour: "3/1/20", heure: "5:30"}
// ]

// let weakMapDates = new WeakMap();

// for (let i = 0; i < 3; i++) {
//   weakMapDates.set(messages[i], dates[i]);
// }

// console.log(weakMapDates.has({text: "Hello", from: "John"}));


// for (let message of messages) {
//   weakMapDates.add(message, dates)
// }

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// let readMessages = new WeakSet();

// readMessages.add(messages[0]);
// readMessages.add(messages[1]);

// console.log(readMessages.has(messages[0]));
// console.log(readMessages.has(messages[2]));

// messages.shift();

// console.log(readMessages.has(messages[0]));

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(arr) {
//   let map = new Map();
//   for (let mot of arr) {
//     map.set((mot.toLowerCase().split('').sort().join('')), mot);
//   }
//   return Array.from(map.values());
// //   let map = new Map();
// //   for (let mot in arr) {
// //   let sorted = mot.toLowerCase().split('').sort().join('');
// //   map.set(sorted, mot);
// //  }
// //  return Array.from(map);
// }

// console.log(aclean(arr));

// console.log();


// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(values) ); // Hare, Krishna, :-O

// function unique(arr) {
//   // let result = new Set();
//   // // arr.map((str, current) => result.add(current));
//   // arr.forEach(el => result.add(el));
//   // return result;
//   return Array.from(new Set(arr));
// }

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// let usersById = groupById(users);

// function groupById(arr) {
//   return arr.reduce((obj, current) => obj[current.id] = current);
// }
// console.log(usersById);


// let strings = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// function unique(arr) {
//   let result = [];
//   for (let el of arr) {

//     result.find(item => item == el) ?
//     null :
//     result.push(el);
//   }
//   return result;
// }

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };

// let arr = [ john, pete, mary ];

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// ma version
// function getAverageAge(arr) {
//   let sum = 0;
//   for (let obj of arr) {
//     sum += obj.age;
//   }
//   return sum / arr.length
// }

// function getAverageAge(arr) {
//   return arr.reduce((accumulator, current) => accumulator + current.age, 0) / arr.length ;
// }



// let arr = [1, 2, 3];

// function shuffle(array) {
//   for (let i = array.length - 1 ; i > 0; i--){
//     let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

//     // swap elements array[i] and array[j]
//     // we use "destructuring assignment" syntax to achieve that
//     // you'll find more details about that syntax in later chapters
//     // same can be written as:
//     // let t = array[i]; array[i] = array[j]; array[j] = t
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// sort() provoque un biais
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5);
// }

// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 100000; i++) {
//   shuffle(arr);
//   count[arr.join('')]++;
// }

// for (let key in count) {
//   console.log(`${key}: ${count[key]}`);
// }
// let arr = [1, 2, 3];

// function shuffle(arr) {
//   return arr.sort(() => Math.random() - .5);
// }

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let arr = [ pete, john, mary ];

// sortByAge(arr);

// // now: [john, mary, pete]
// alert(arr[0].name); // John
// alert(arr[1].name); // Mary
// alert(arr[2].name); // Pete

// function sortByAge(arr) {
//   arr.sort( (a, b) => a.age > b.age ? 1 : -1);
// }


// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];

// let userMapped = users.map(item => ({ 
//   fullName: item.name + ' ' + item.surname,
//   id: item.id
// }));

// console.log(userMapped);

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// users = users.map(item => item.name);

// for (let user of users) {
//   user = user.name;
// }



// console.log(users);

// function Calculator() {

//   this.methods = {
//     "+": (a, b) => a + b,
//     "-": (a, b) => a - b
//   }

//   this.calculate = function(str) {
//     let arr = str.split(' ');
//     // return arr[1] == '+' ? 
//     // +arr[0] + +arr[2] :
//     // +arr[0] - +arr[2] ;
//     let operator = arr[1];
//     let a = +arr[0];
//     let b = +arr[2];
//     return this.methods[operator](a, b);
//   }

//   this.addMethod = function(nom, fonction) {
//     this.methods[nom] = fonction;
//   }
// }

// let calc = new Calculator;

// console.log(calc.calculate('3 - 7'));

// calc.addMethod("*", (a, b) => a * b);

// console.log(calc.calculate('3 * 7'));

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// function copySorted(arr) {
//   let sorted = []
//   for (let mot of arr ){
//     sorted.push(mot);
//   }
//   return sorted.sort();
// }

// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (no changes)



// let arr = [5, 2, 1, -10, 8];

// // ... your code to sort it in decreasing order

// arr.sort((a, b) => b - a);

// alert( arr ); // 8, 5, 2, 1, -10


//   let arr = [5, 3, 8, 1];

//   function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//       if (a <= arr[i] <= b) {
//       arr.splice(i, 1)
//     }
//     }
//   }

// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

// alert( arr ); // [3, 1]

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements between a and b in it and returns an array of them.

// The function should not modify the array. It should return the new array.

// let arr = [5, 3, 8, 1];

// function filterRange(arr, a, b) {
//   return arr.filter(item => a <= item && b >= item);
// }

// console.log(filterRange(arr));
// console.log(camelize("background-color"));
// console.log(camelize("list-style-image"));
// console.log(camelize("-webkit-transition"));

// function camelize(str) {
//   if (str[0] == '-') {
//     str = str.slice(1);
//   }

//   let arr = str.split('-');  // des mots
//   for (let mot of arr) {
//     mot.split('');
//   }


  
//   for (let i = 1; i < arr.length ; i++) {
//     arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//   }
  
//   return arr.join('');
  
// }

// function camelize(str) {
//   return str
//   .split('-')
//   .map(
//     (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//   )
//   .join('')
// }

// console.log(camelize("-background-color"));


// let arr = [11, 2, 3, 4, 55, 6, 7, 8, 9];

// arr.sort( (a, b) => a - b);

// console.log(arr);

// function mul(base) {
//   for (let i = 1 ; i < 11; i++){
//     console.log(base * i);
//   }
// }

// arr.map(item => mul(item));

// arr.forEach(base => {
//   for (let i = 1 ; i < 11; i++){
//     console.log(base * i);
//   }
//   console.log('\n');
// })

// console.log(arr.indexOf(3));

// additionn arr[i] à max si arr[i] est > à arr[i + 1]
// on additionne arr[i] si max + arr[i] > 0 et si max < max + somme de tous les prochains éléments
// deux variables : max et currentAddition
  // on additionne à currentAddition si arr[i] > 0;
  // si on rencontre un nombre négatif, 
    // si arr[i] + arr[i+1] > 0, on additionne à currentAddition
    // else, currentAddition = 0
  // si currentAddition > max
    // max = currentAddition

// function getMaxSubSum(arr) {
//   let len = arr.length;
//   let allNegative = true;
//   // let sum = 0;
//   let max = 0;
//   let currentAddition = 0;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] >= 0) {
//       allNegative = false;
//       currentAddition += arr[i];
//     } else {
//       // BUG : arr[i + 1 => out of bound
//       if (arr[i] + arr[i + 1] > 0 && (currentAddition + arr[i]) > 0 && i > 0) {
//         currentAddition += arr[i];
//       } else {
//         currentAddition = 0;
//       }
//     }
    
//     if (currentAddition > max) {
//       max = currentAddition;
//     }
//   }
//   return allNegative ? 0 : max;
  
// }

// alert(getMaxSubSum([1, 2, 3]));

// function sumInput() {
//   let arr = [];
//   let a = 0;
//   while(isFinite(a = +prompt("Entrez un chiffre", 0))) {
//     arr.push(a);
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// alert(sumInput());
// let styles = ['jazz', 'blues'];

// styles.push('rock\'n\'roll');

// styles[Math.floor((styles.length / 2))] = 'classics';

// alert(styles);

// alert(styles.shift());

// styles.unshift('country', 'raggae');

// alert(styles);

// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// alert( extractCurrencyValue('$120') === 120 );

// function truncate(str, maxlenght) {
//   if (str.length > maxlenght) {
//     let surplus = str.length - maxlenght;
//     return str.slice(0, (str.length - (surplus + 1))) + "…";
//   }
//   return str;
// }

// alert(truncate("Hello Kitty !", 6));

// function checkSpam(str) {
//   let strLow = str.toLowerCase();
//   return strLow.includes("viagra") || strLow.includes("xxx");
// }

// alert(checkSpam('vizergra and xXx'));

// function ucFirst(str) {
//   return (str[0].toUpperCase() + str.slice(1));
// }

// alert(ucFirst('john'));

// let str = '';

// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }

// alert(str);

// for (let i = 60; i < 128; i++) {
//   alert(String.fromCodePoint(i));
// }

// let str = 'Widget with id';

// let s = str.slice(4);
// alert(s);

// let pos = -1;
// while ((pos = str.indexOf('id', pos + 1)) != -1) {
//   alert(pos);
// }

// alert( str.indexOf('id', 3) ) // 12



// let hello = "hello";
// let l = hello.length;
// for (let i = 0; i< l; i++) {
//   alert(hello[i]);
// }

// for (let car of hello) {
//   alert(car);
// }

// function random(min, max) {
//   min = parseInt(min);
//   max = parseInt(max);
  

//   let tirage =  min + Math.random() * (max + 1 - min);
//   return Math.floor(tirage);
// }
// while(true) {
//   alert(random(1, 5));
// }
// function random(min, max) {
//   min = parseInt(min);
//   max = parseInt(max);
  

//   let tirage = 0;
//   // let resultat = 0;
//   do {
//     tirage = min + Math.random() * max;
//     // resultat = min * tirage;
//   }
//   while (tirage >= max) {
//     // tirage = min + Math.random() * max;
//     // resultat = min * tirage
//   }
//   return tirage;
// }

// alert(random(1, 5));

// alert(+prompt("nombre 1", 0) + +prompt("nombre 2", 0));

// alert(+prompt("nombre", 0) + 2);

// let num = NaN;

// while (!isFinite(num)) {
//   num = +prompt("Enter a number", 0)
// }

// alert(Object.is(num, 5));

// let num = 255;

// alert(num.toString(2));
// alert(isFinite(num));

// let str = "Hello";

// str.test = 5;

// alert(str.test);

// let str = "bonjour";

// alert(str.toUpperCase());


// let user = {
//     name: "John",
//     money: 1000,
  
    // [Symbol.toPrimitive](hint) {
    //   alert(`hint: ${hint}`);
    //   return hint == "string" ? `{name: "${this.name}"}` : this.money;
    // }
  // };
  
  // conversions demo:
  // alert(user); // hint: string -> {name: "John"}
  // alert(+user); // hint: number -> 1000
  // alert(user + 500); // hint: default -> 1500

// let user = { name: "Antony"};

// let id = Symbol("id_number");

// user[id] = 1;

// alert(user[id]);

// let user = { name: "Antony", admin : function() { return true}};

// alert(user && user.address && user.address.street);
// alert(user?.name?.address);

// alert(user.admin?.());

// function Accumulator(initialValue) {
//     this.currentValue = initialValue;
//     this.read = function() {
//         this.currentValue += +prompt("Entrez un nombre à ajouter", 0);
//     }
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();
// alert(accumulator.currentValue);

// function Calculator() {
//     this.read = function() {
//         this.v1 = +prompt("Enter value", 0);
//         this.v2 = +prompt("Enter value", 0);
//     };
//     this.sum = function() { return this.v1 + this.v2};
//     this.mul = function() {return this.v1 * this.v2 };
// }

//     let calculator = new Calculator();
//     calculator.read();

//     alert( "Sum=" + calculator.sum() );
//     alert( "Mul=" + calculator.mul() );

// let objet = { name: "Antony", isAdmin: false };

// function A() { return objet };
// function B() { return objet };


// let a = new A;
// let b = new B;

// alert( a == b ); // true



// const { assert } = require("chai");

// function User (name) {
//   this.name = name;
//   this.isAdmin = false;
//   // return this;
// }

// let antony = new User("Antony");

// alert(antony.isAdmin);
// assert(antony.isAdmin, false);

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() { // shows the current step
//     alert( this.step );
//   }
// };

// ladder.up().up().down().showStep();

// let calculette = {
//   read() {
//     this.v1 = +(prompt("entrez la première valeur.", 0));
//     this.v2 = +(prompt("entrez la seconde valeur.", 0));
//   },
//   sum() {
//     return this.v1 + this.v2;
//   },
//   mul() {
//     return this.v1 * this.v2;
//   }
// }

// calculette.read();
// calculette.sum();
// calculette.mul();

// let nom = "Antony";

// for (let i = 0; i < nom.length; i++) {
//   console.log(nom[i]);
// }

// 'use strict'

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu",
//     getSurface() {
//         return this.width * this.height;
//     }
//   };


// alert(menu.getSurface());

// let clone = Object.assign({}, menu);

// for (let key in clone) {
//     alert(clone[key])
// }


// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (!isNaN(obj[key])) obj[key] *= 2;
//     }
// }

// multiplyNumeric(menu);

// for (let key in menu) {
//     alert(menu[key]);
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// let sum = 0;
// for (let prop in salaries) {
//     sum += salaries[prop];
// }
// alert(sum);

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// function isEmpty(objet) {
//     for (let prop in objet) {
//         if (prop) return false;
//     }
//     return true;
// }



// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false



// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let codes = {
//     49: "Germany",
//     41: "Switzerland",
//     44: "Great Britain",
//     // ..,
//     1: "USA"
//   };
  
//   for (let code in codes) {
//     alert(code); // 1, 41, 44, 49
//   }

// let user = {
//     name: "John",
//     surname: "Smith"
//   };
//   user.age = 25; // add one more
  
//   // non-integer properties are listed in the creation order
//   for (let prop in user) {
//     alert( prop ); // name, surname, age
//   }


// let user = makeUser("Antony", 37);

// alert(`Bonjour ${user.name} tu as ${user.age} ans`);

// let condition = "name" in user;
// if (condition) alert(true);

// for (let key in user) {
//     alert(`${key} : ${user[key]}`);
// }

// let user = {
//     nom: "Antony",
//     age: 37,
//     isAdmin: true,
//     "likes surfing": true
// }

// alert(user.nom);

// let key = prompt("Que voulez vous savoir de l'utilisateur ?", "nom");
// alert(`${key} : ${user[key]}`);



// delete user.isAdmin;
// alert(user.nom);
// alert(user.isAdmin);
// alert(user["likes surfing"]);
// user["likes surfing"] = false;
// alert(user["likes surfing"]);
// let hobby = "likes surfing";
// alert(user[hobby]);

// function pow(a, b) {
//     for (let i = 0; i < b; i++) {
//         a*=a;
//     }
//     return a;
// }
// var assert = require('assert');
// describe("pow", function() {
//     it("raises a to b power", function() {
//         assert.equal(pow(2, 3), 8);
//     })
// })
// 'use strict'

// let ask = (question, yes, no) => {if (confirm(question)) {
//         yes()
//     } else {
//         no()
//     }};

// ask("Etes-vous majeur ?",
//     () => alert("Majeur"),
//     () => alert("mineur"),
// )



// let age = prompt("What is your age ?", 18);
// let welcome = (age > 18) ?
// () => alert("Majeur"):
// () => alert("Mineur")
// welcome();

// let somme = (a, b) => a + b;
// alert(somme(2, 2));

// let age = prompt("What is your age ?", 18);
// let welcome = (age > 18) ?
// function() {alert("Majeur")}:
// function() {alert("Mineur")};
// welcome();

// function ask(question, yes, no){
//     if(confirm(question)) {
//         yes()
//     } else {
//         no()
//     }
// }

// ask("Etes-vous majeur ?",
// function() { alert("Vous êtes majeur")},
// function() {alert("Vous êtes mineur")}
// )

// let input = null;
// do {
//     input = prompt("Entrez un nombre > à 100", '');
// } while (isNaN(+input) || input <= 100);

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