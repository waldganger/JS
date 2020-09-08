'use strict'

// function arrayToList(array) {
//   let list = null;
//   for (let i = array.length - 1; i >= 0; i--) {
//     list = {value: array[i], rest: list};
//   }
//   return list;
// }

// function listToArray(list) {
//   let array = [];
//   for (let node = list; node; node = node.rest) {
//     array.push(node.value);
//   }
//   return array;
// }

// function prepend(el, list){
//   return { value: el, rest: list};
// }

// function nth(list, n){
//   let i = 0;
//   for (let node = list; node; node = node.rest){
//     if (i == n){
//       return node.value;
//     }
//     i++;
//   }
// }

// function rnth(list, n){
//   if (n == 0) return list.value;
//   return rnth(list.rest, n - 1);

// }

// console.log(prepend(10, prepend(20, null)));
// console.log(rnth(arrayToList([10, 20, 30]), 1));

function deepEqual(a, b){
  if (typeof(a) == typeof(b) && a === b) {
    return true;
  }
  return false;
}

console.log(deepEqual(2, 22));

// function reverseArray(array){
//   let l = array.length - 1;
//   let result = [];
//   for (let i = l ; i >= 0; i--){
//     result.push(array[i]);
//   }
//   return result;
// }

// console.log(reverseArray(["A", "B", "C"]));

// function reverseArrayInPlace(array){
//   let h = 0;
//   let t = array.length -1 ;
//   while(h != t) {
//     let temp = array[h];
//     array[h] = array[t];
//     array[t] = temp;
//     h++;
//     t--;
//   }
//   // for(let i = 0 ; i < l ; i++){
//   //   // console.log(array[i]);
//   //   tempTail = array.pop();
//   //   tempHead = array.shift();
//   //   array[i] = tempTail;
//   // }
//   return array
// }

// let arrayValue = [1, 2, 3, 4, 5];

// console.log(reverseArrayInPlace(arrayValue));

// function range(start, end, step = 1){
//   let result = [];  
//   for (let i = start; i <= end; i+= step) 
//     result.push(i);
//   return result;
// }

// console.log(range(1, 10, 2));

// function sum(array){
//   return array.reduce((somme, acc) => somme + acc, 0);
// }

// console.log(sum(range(1, 10, 2)));

// function countChar(string, char){
//   let cCount = 0;
//   for (let c of string){
//     if (c == char) cCount++;
//   }
//   return cCount;
// }

// console.log(countChar("kakkerlak", "k"));

// console.log(countB("BBC"));

// function isEven(num){
//   if (num < 0) num = -num;
//   if (num == 0) return true;
//   if (num == 1) return false;
//   return isEven(num - 2);
// }

// console.log(isEven(-1));

// function min(a, b){
//   return a > b ? b : a;
// }

// console.log(min(0, 10));

// function recurseHaha(n, mock = "ha"){
//   if (n == 1) return mock;
//   mock += "-ha";
//   return recurseHaha(n - 1, mock);
// }

// console.log(recurseHaha(1000));

// function multi(factor){
//   return number => factor * number;
// }

// let twice = multi(4);
// console.log(twice(5));

// function wrapValue(n){
//   let local = n;
//   return () => local;
// }

// console.log(wrapValue(5)());
// console.log(wrapValue(6)());

// const plusUn = (x) => {return x + 1};
// console.log(plusUn(5));

// let chess = ''
// const size = 8;

// for(let i = 0; i < size; i++){
//   for(let j = 0; j < size; j++){
//     chess += 
//     (i + j) % 2 == 0 ?
//     ' ' :
//     '#';
//   }
//   chess += '\n';
// }

// console.log(chess);

// const prompt = require('prompt-sync')();

// const size = +prompt("enter size") ;
// let sharp = '';
// for(let i = 0; i < size; i++){
//   sharp += '#';
//   console.log(sharp);
// }

// console.log(location.href);

// console.log(navigator.userAgent);
// console.log(navigator.platform);

// if (location.href != 'https://lainchan.org/%CE%BB/res/18249.html') location.href = 'https://lainchan.org/%CE%BB/res/18249.html';

// console.log(window.innerHeight);

// document.body.style.background = "green";

// setTimeout(() => document.body.style.background = "", 2000);

// import {Clock} from './Clock.js';

// let clock = new Clock;


// let generator = pseudoRandom(1);

// function* pseudoRandom(seed){

//   let value = seed;
//   while(true){
//     value = value * 16807 % 2147483647;
//     yield value;
//   }
// }

// for(let i = 0; i < 100; i++){
//   console.log(generator.next());
// }

// function* generateSequence(start, end) {
//   for (let i = start; i < end; i++) yield i;
// }

// function* generatePasswordCode(){
//   yield* generateSequence(48, 57);
//   yield* generateSequence(65, 90);
//   yield* generateSequence(97, 122);
// }

// let str = '';
// for (let code of generatePasswordCode()){
//   str += String.fromCharCode(code);
// }
// console.log(str);

// let range = {
//   from: 1,
//   to: 5,

//   *[Symbol.iterator]() {
//     for(let value = this.from; value < this.to; value++){
//       yield value;
//     }
//   }
// }

// console.log([...range]);


// function* generateSequence() {
//   yield 1;
//   yield 2;
//   return 3;
// }

// let generator = generateSequence();

// for (let value of generator){
//   console.log(value);
// }

// let sequence = [-1, 0, ...generateSequence()];

// for(let c of sequence){
//   console.log(c);
// }

// console.log(JSON.stringify(generator.next()));
// console.log(generator.next());
// console.log(generator.next().value);

// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//     if (response.status == 200) {
//       return response.json();
//     } else {
//       throw new HttpError(response);
//     }
// }

// Ask for a user name until github returns a valid user
// async function demoGithubUser() {
//   try{
//     let name = prompt("Enter a name?", "iliakan");
//     let user = await loadJson(`https://api.github.com/users/${name}`);
//     console.log(`Full name: ${user.name}.`);
//     return user;
//   } catch(err) {
//     if (err instanceof HttpError && err.response.status == 404) {
//       console.log("No such user, please reenter.");
//       return demoGithubUser();
//     } else {
//       throw err;
//     }
//   }
// }

// demoGithubUser();

// async function loadJson(url) {
//   let response = await fetch(url);
//   return response.status == 200 ? response.json() : Error(response.status);
//   // if (response.status == 200){
//   //   return response.json();
//   // } else {
//   //   throw new Error(response.status);
//   // }
// }

// console.log(loadJson('https://api.github.com/users/waldganger0909').catch(console.log));


// async function showAvatar() {
//   let name = prompt('entrez un nom de compte Github.', 'compte');
//   console.log(name);

//   try{
//     let githubResponse = await fetch(`https://api.github.com/users/${name}`);   // fetch renvoit une promise, d'où la méthode json()

//     let githubUser = await githubResponse.json();

//     let img = document.createElement('img');
//     img.src = githubUser.avatar_url;
//     img.className = "promise-avatar-exemple";
//     document.body.append(img);

//     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

//     img.remove();

//     return githubUser;
//   } catch (err){
//     console.log(err);
//   }

// }

// showAvatar();

// let manon = 'manon';
// for (let lettre of manon){
//   console.log(lettre);
// }

// console.log(manon.split('').map(letter => letter.codePointAt()).join(''));

// async function showAvatar() {
  
//   // Read our JSON
//   let response = await fetch('https://api.github.com/users/waldganger');
//   let waldganger = await response.json();
// }

// async function f(){
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('done !'), 1000)
//   });
//   let result = await promise;

//   console.log(result);
// }

// f();

// async function f() {
//   return Promise.reject('bad');
// }

// // f().then(console.log);
// f().catch(console.log);

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig',
//   'https://no-such-url'
// ];

// Promise.allSettled(urls.map(url => fetch(url)))
// .then(results => {
//   results.forEach((result, num) => {
//     if (result.status == "fulfilled") {
//       console.log(`${urls[num]}: ${result.value.status}`);
//     }
//     if (result.status == "rejected") {
//       console.log(`${urls[num]}: ${result.reason}`);
//     }
//   });
// })

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://api.github.com/users/jeresig'
// ];

// let requests = urls.map(url => fetch(url));

// Promise.all(requests)
// .then(responses => responses.forEach(
//   response => console.log(`${response.url}: Status reponse ${response.status}`)
// ));

// Promise.all([
//   new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//   new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//   new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(console.log); // 1,2,3 when promises are ready: each promise contributes an array member

// window.addEventListener('unhandledrejection', function(event) {
//   // the event object has two special properties:
//   alert(event.promise); // [object Promise] - the promise that generated the error
//   alert(event.reason); // Error: Whoops! - the unhandled error object
// });

// new Promise(function() {
//   throw new Error("Whoops!");
// }); // no catch to handle the error

// let promise = new Promise(function(resolve, reject) {
//   // setTimeout(() => resolve("done"), 1000);
//   setTimeout(() => reject(new Error("Whoops !")), 1000);
// });

// promise.catch(console.log);

// promise.then(
//   result => console.log(result),
//   error => console.log(error)
// );

// document.body.style.background = 'red';

// setTimeout(() => {
//   document.body.style.background = '';

// }, 5000);

// alert(location.href);
// if (confirm("Go to wikipedia ?")) location.href = "https://www.wikipedia.org";

// console.log(this.Window.toString());

// function loadScript(src, callback) {
//   let script = document.createElement('script');
//   script.src = src;
//   script.onload = () => callback(script);
//   document.head.append(script);
// }

// loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
//   alert(`Cool, the script ${script.src} is loaded`);
//   alert( _ ); // function declared in the loaded script
// });



// let num = +prompt("Enter a large positive number");

// let diff, result;

// function fib(n){
//   if (n < 0 || Math.trunc(n) != n) {
//     throw new Error("Must be positive, and also an integer.");
//   }
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// let start = Date.now();

// try{
//   result = fib(num);
// } catch(e) {
//   result = 0;
// } finally {
//   diff = Date.now() - start;
// }

// console.log(result || 'Error occured');
// console.log("Execution took " + diff + 'ms');

// let json = '{"name":"John", "age":"30"}';

// let user = JSON.parse(json);

// console.log(user.name);
// console.log(user.age);

// let badJson = '{name}';

// try{
//   JSON.parse(badJson);
//   console.log(badJson.name);
// } catch(e) {
//   console.log("Our apologies, the data has errors, we'll try to request it one more time.");
//   console.error(e.name);
//   console.error(e.message);
// }

// let noName = '{"age" : 30}';
// let user2 = JSON.parse(noName);

// try{
//   if(!user2.name) throw new SyntaxError("Incomplete data : no name.");
//   console.log(user2.name);
// } catch(e) {
//   console.log(`JSON error : ${e}`);
// }

// let bonjour = {
//   sayHi(){
//     console.log(`Bonjour je suis une cafetière ${this.name}`);
//   }
// }




// class CoffeeMachine {

//     name = "Moulinex";

//     get power(){
//       return this._power;
//     }

//     #waterAmount = 0;
//     set waterAmount(value){
//         if (value < 0) throw new Error("Negative water!")
//         else this.#waterAmount = value;
//     }
//     get waterAmount(){
//         return this.#waterAmount;
//     }

//     constructor(power){
//         this._power = power;
//         console.log(`Created a coffee-machine, power: ${power}`);
//     }
// }


// let coffeeMachine = new CoffeeMachine(100);
// coffeeMachine.waterAmount = 200;
// console.log(coffeeMachine instanceof CoffeeMachine);
// console.log(Array instanceof Object);
// console.log(Array.toString());

// Object.assign(CoffeeMachine.prototype, bonjour);
// coffeeMachine.sayHi();
// coffeMachine.power(25);


// class Article {

//   static publisher = "Antony Merle";

//   constructor(title, date){
//     this.title = title;
//     this.date = date;
//   }

//   static compare(article1, article2){
//     return article1.date - article2.date;
//   }

//   // "Factory" constructor

//   static createTodays(){
//     // this == Article
//     return new this("Today's digest", new Date());
//   }

  
// }

// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("CSS", new Date(2019, 11, 1)),
//   Article.createTodays()
// ]

// articles.sort(Article.compare);

// console.log(articles[0]);
// console.log(articles[3]);
// console.log(Article.publisher);


// class Clock {
  
//   constructor({template}) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     if (hours < 10) hours = '0' + hours;
//     if (minutes < 10) minutes = '0' + minutes;
//     if (seconds < 10) seconds = '0' + seconds;

//     let output = this.template
//     .replace('h', hours)
//     .replace('m', minutes)
//     .replace('s', seconds);

//     console.log(output);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }
// };

// class ExtendedClock extends Clock {
//   constructor(template, precision = 1000){
//     super(template);
//     this.precision = precision;
//   }


//   start(){
//     this.render();
//     this.timer = setInterval(() => this.render(), this.precision);
//   }
// };

// let extendedClock = new ExtendedClock({template: "h:m:s"}, 5000);
// extendedClock.start();


// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);


// class Animal {
//   constructor(name) {
//     this.name = name;
//     this.speed = 0;
//   }

//   run(speed){
//     this.speed = speed;
//     console.log(`${this.name} runs at ${this.speed} km/h.`);
//   }
//   stop(){
//     this.speed = 0;
//     console.log(`${this.name} stands still.`);
//   }
// }


// class Rabbit extends Animal {
//   hides() {
//     console.log(`${this.name} hides!`);
//   }
//   stop(){
//     super.stop(); // calls parent method
//     this.hides();
//   }
// }


// let animal = new Animal();

// let rabbit = new Rabbit("jojo");
// rabbit.run(15);
// rabbit.stop();

// timer = setInterval(() => { let date = new Date(); console.log(date.getTime())}, 1000);

// class Clock {
  
//   constructor({template}) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     if (hours < 10) hours = '0' + hours;
//     if (minutes < 10) minutes = '0' + minutes;
//     if (seconds < 10) seconds = '0' + seconds;

//     let output = this.template
//     .replace('h', hours)
//     .replace('m', minutes)
//     .replace('s', seconds);

//     console.log(output);
//   }

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }

//   stop() {
//     clearInterval(this.timer);
//   }
// }

// let clock = new Clock( {template: "h:m:s"} );
// clock.start();


// class Famille {
//   constructor(name){
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`${this.name}`);
//   }
// }

// let merle = new Famille("Merle");
// merle.sayHi();

// console.log(typeof Famille);

// let moi = "Antony";
// console.log(moi.replace('A', 'a'));
// console.log(moi);

// let chineseDictionary = Object.create(null);
// chineseDictionary.hello = "你好";
// chineseDictionary.bye = "再见";

// for (let key of Object.keys(chineseDictionary)) {
//   console.log(chineseDictionary[key]);
// }

// let obj = {};

// let key = prompt("What's the key?", "__proto__");
// obj[key] = "some value";

// alert(obj[key]); // [object Object], not "some value"!

// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true,


// };

// let ours = Object.create(animal);

// console.log(ours.eats);

// Object.setPrototypeOf(ours, {});
// console.log(ours.eats);

// function Rabbit(name){

//   this.name = name;
//   this.__proto__ = animal;
// }
// // Rabbit.prototype = animal;

// rabbit.__proto__ = animal;

// console.log(rabbit.eats);

// let bb = new Rabbit();

// console.log(bb.eats);

// let arr = [1, 2, 3, 4, 5];


// arr.forEach(el => console.log(el * el));


// function maFamille(...args){
//   return args.reduce((curr, acc) => curr + ' ' + acc);
// }



// let user = {
//   firstName: "John",
//   lastName: "Doe",
//   get fullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   },
//   set fullName(nom){
//     [this.firstName, this.lastName] = nom.split(' ');
//   },
//   sayHi() {
//     alert(`Hello, ${this.firstName}!`);
//   }
// };

// Object.defineProperty(user, "firstName", { writable: true});

// let props = JSON.stringify(Object.getOwnPropertyDescriptor(user, 'firstName'), null, 2);

// console.log(props);
// user.fullName;

// user.firstName = "antony";

// for (let [prop, value] of Object.entries(user)){
//   console.log(prop);
//   console.log(value);
// }

// for (let key in user){
//   console.log(key);
// }

// console.log("______");
// for (let key in user){
//   console.log(user[key] ?? 'nuting');
// }

// user.fullName = "Antony Merle";
// user.fullName;
  



// setTimeout(user.sayHi.bind(user), 2000);

// let priere = [];
// let pitie = "Seigneur Jésus Christ, fils de Dieu, donnez-nous un troisième enfant !";
// let timerId = setInterval(() => { console.log(pitie); priere.push(pitie);}, 3000);

// let timerId = setInterval(() => console.log("tick"), 2000);

// setTimeout(() => {clearInterval(timerId); console.log("stop");}, 5000);

// let timerId = setTimeout(function tick(){
//   console.log('tick');
//   timerId = setTimeout(tick, 2000);
// }, 2000);

// let sayHi = function() {
//   console.log("hi");

//   sayHi.counter++;
// }

// sayHi.counter = 0;

// for(let i = 0; i < 1000; i++){
//   sayHi();
// }

// console.log(sayHi.name);
// console.log(sayHi.length);
// console.log(sayHi.counter);

// closure

// function sum(a){
//   return function(b){
//     return a + b;
//   };
// }

// console.log(sum(2)(5));

// let arr = [1, 2, 3];

// console.log(arr.filter((item => item == 2)).map(item => item * 2));
// globalThis.console.log("globalThis !");

// console.log(
// Math.max(...arr));

// let arr2 = [...arr];

// console.log(arr === arr2);
// console.log(reducteur(arr));

// function reducteur(...args) {
//   let sum = 0;
//   return args.reduce((curr, acc) => curr + acc, 0);
// }

// function showWeekDay(date){
//   let days = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
//   return days[date.getDay() - 1];
// }
// let today = new Date();
// today.getTime();
// console.log(showWeekDay(today));

// let todayJson = JSON.stringify(today);
// console.log(todayJson);

// let famille = {
//   pere: "Antony",
//   mere: "Manon",
//   enfant: "Basile",
//   taille: 3,
//   toJSON() {
//     return this.taille;
//   }
// }

// famille = JSON.stringify(famille, null, 2);
// console.log(famille);

// let familleObj = JSON.parse(famille);
// console.log(familleObj);

// let date = new Date("2020-08-21");
// console.log(date);

// date.setHours(8);
// console.log(date);
// console.log(Date.now());

// let avant = new Date(0);
// let diff = Date.now() - avant;
// console.log( diff );

// console.log(avant.getFullYear());

// let maDate = new Date();
// maDate.getTime();
// console.log(`${maDate.getDate()} ${maDate.getMonth() + 1} ${maDate.getFullYear()} ${maDate.getHours()}:${maDate.getMinutes()}:${maDate.getSeconds()} `);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250,
//   "Bob": 300
// };

// function topSalaries(objet) {
//   let max = 0;
//   let palpeurs = new Map();
//   for (const salaire of Object.values(objet)){
//     if (salaire >= max) {
//       max = salaire;
//       // console.log(max);
//     }
//   }
//     for (const [name, salaire] of Object.entries(objet)){
//       if (salaire == max){
//         console.log(salaire);
//         palpeurs.set(name, salaire);
//       }
//     }

  
//   console.log("Top salaries :");
//   for (let [name, salaire] of palpeurs) {
//     console.log(`${name}: ${salaire}`);
//     // console.log(`${key} : ${value}`);
//   }
// }

// topSalaries(salaries);

// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years:age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// let array = [1 , 2, 3, 4, 5];

// console.log(array.reduce((current, acc) => current + acc, 0));

// let func = (a, b) => a + b;
// console.log(func(4, 4));

// function charCount(mot){
//   return mot.length;
// }
// console.log(charCount("Antony"));

// let famille = ["Antony", "Manon", "Basile"];

// let [moi, elle, petit] = famille;

// for (let membre of famille){
//   console.log(membre);
// }

// let fiche = {};

// [fiche.nom, fiche.prenom] = "Antony Merle".split(' ');

// for (let [key, value] of Object.entries(fiche)) {
//   console.log(`${key} : ${value}`);
// }

// let [ville1, ville2, ...leReste] = ["Anglet", "Bayonne", "Biarritz", "Bidart"];

// console.log(ville1, ville2, leReste);



// let map = new Map();

// map.set("name", "John");

// let keys = Array.from(map.keys());

// let arr = map.entries();
// for (let a of arr){
//   console.log(a);
// }
// keys.push("more");



// console.time('looper');

// for (let i = 0; i < 1000000; i++) {
// }

// console.timeEnd('looper');

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(array){
//   let map = new Map();
//   for (let word of arr){
//     let sorted = word.toLowerCase().split('').sort().join('');
//     map.set(sorted, word);
//   }
//   return Array.from(map.values());
// }

// console.log(aclean(arr));



// let moi = "antony";
// let elle = "manon";
// let enfant = "basile";
// let miracle = "désiré";

// console.log("Notre famille");
// console.log(moi + " " + elle + " " + enfant + " " + miracle);

// for (let lettre of moi){
//   console.log(lettre);
// }

// let famille = {
//   pere: moi,
//   mere: elle,
//   boy: enfant,
//   aNaitre: miracle
// };

// for (let key of Object.keys(famille)){
//   console.log(key);
// }


// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no();
// }

// let ask = (question, yes, no) => {if (confirm(question)) yes(); else no()};

// ask(
//   "Do you agree?",
//   function() { alert("You agreed."); },
//   function() { alert("You canceled the execution."); }
// );

// let array = [1, 2, 3, "basile"];
// let debutant = ["j'apprends", "le"]

// // array.forEach(console.log());

// let str = '';
// for (let i = 65; i < 220; i++) {
//   str += String.fromCharCode(i);
// }
// console.log(str);

// console.log(`String length is : ${str.length}`);

// for (let el of array){
//   console.log(el);
// }

// debutant.push("JavaScript");
// console.log(debutant);
// debutant.unshift("maintenant");
// debutant.shift("maintenant");
// console.log(array.concat(debutant));
// let nouveau = array.concat(debutant);
// console.log(nouveau.splice(2, 2));
// console.log(nouveau);
// console.log(debutant[0].slice(0, debutant[0].length));
// let septFamilles = [famille, famille, famille];
// console.log(septFamilles.find(item => item.pere == moi));

// // console.log(`${() => (2 + 2)}`);
// // let arrow = () => {return 2 + 2};
// // console.log(`${arrow}`);
// let a = 1;
// let plusUn = (num) => {return num + 1};
// console.log(plusUn(4));

// let louange = "Gloire à Dieu pour toutes choses !";
// let chapelet = new Array(1000).fill(louange);
// // Array(chapelet).fill(louange);

// for (let priere of chapelet) {
//   console.log(priere);
// }
// let jesus = chapelet.map(p => "Seigneur Jesus, fils de Dieu, ayez pitié de moi.");

// for (let p of jesus) {
//   console.log(p);
// }

// let chiffres = [5, 9, 18, 2];
// console.log(chiffres.sort((a,b) => a - b));
// console.log(chiffres.reduce((sum, current) => sum + current, 0));

// let rien = null;

// console.log(rien ?? jesus);

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// console.log(Object.values(salaries).reduce((sum, current) => sum + current, 0));

// famille.nom = "Merle";

// for (let prop in famille) {
//   console.log(famille[prop]);
// }

// for (const[key, value] of Object.entries(famille)){
//   console.log(`${key}: ${value}`);
// }


// let hamster = {
//   stomach: [],

//   eat(food) {
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster
// };

// // This one found the food
// speedy.eat("apple");
// console.log( speedy.stomach ); // apple

// // This one also has it, why? fix please.
// console.log( lazy.stomach ); // apple

// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3,
//   __proto__: head
// };

// let bed = {
//   sheet: 1,
//   pillow: 2,
//   __proto__: table
// };

// let pockets = {
//   money: 2000,
//   __proto__: bed
  
// };

// console.log(pockets.glasses);


// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// console.log(admin.fullName); // John Smith (*)

// // setter triggers!
// admin.fullName = "Alice Cooper"; // (**)
// console.log(admin.fullName);

// console.log(Object.keys(admin));
// console.log('\n');
// for (let key in admin) {
//   console.log("key " + key)
// }


// let animal = {
//   eats: true,
//   walk() {
//     console.log('walks')
//   }
// }

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// }

// let longEars = {
//   earLength: 10,
//   __proto__: rabbit
// }

// // rabbit.__proto__ = animal;

// console.log(rabbit.eats);
// console.log(rabbit.jumps);
// rabbit.walk();
// console.log(longEars.jumps);


// function user (name, birthday) {
//   this.name = name;
//   this.birthday = birthday;

//   Object.defineProperty(this, "age", {
//     get() {
//       let todayDate = new Date().getFullYear();
//       return todayDate - this.birthday.getFullYear();
//     }
//   });
// }

// let antony = new user("antony", new Date(1983, 7, 14));
// console.log(antony.birthday);
// console.log(antony.age);

// let password = {
//   get pass() {
//     return this._pass;
//   },

//   set pass(value) {
//     if (value.length < 6) {
//       console.log("mot de passe trop court");
//       return;
//     }
//     this._pass = value;
//   }
// }

// password.pass = "tata";
// password.pass = "soleil";
// console.log(password.pass);

// let moi = {
//   prenom: "Antony",
//   nom: "Merle",

//   get fullName() {
//     return this.prenom + ' ' + this.nom;
//   },

//   set fullName(blaze) {
//     [this.prenom, this.nom] = blaze.split(' ');
//   }

// }

// console.log(moi.fullName);

// moi.fullName = "Basile Merle";
// console.log(moi.fullName);

// let user = {
//   name: "John",
//   // toString() {
//   //   return this.name;
//   // }
// };

// for (let key in user) {
//   console.log(user[key]);;
// }

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],

//   showList() {
//     this.students.forEach((student) => 
//       console.log(this.title + ': ' + student));
//   }
// };

// group.showList();

// let descriptor = JSON.stringify(Object.getOwnPropertyDescriptor(group, 'title'));

// console.log(descriptor);

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

// function test(){
// console.log(this);
// }

// test.property = 5;



// let user = {
//   g: test.bind(null)
// }

// let see = user.g();

// let user = {
//   firstName: "John",
//   sayHi() {
//     console.log(`Hello, ${this.firstName}!`);
//   }
// };

// // let sayHi = user.sayHi.bind(user);

// let disBonjour = user.sayHi.bind(user);
// // console.log(disBonjour);
// setTimeout(disBonjour, 1000);



// setTimeout(sayHi, 1000);

// function sum(...args) {
//   return args.reduce((acc, current) => acc + current, 0);
// }
// console.log(sum(3,4, 10, 90, 900));
// let isThrottle = false, saveArgs, savedThis;

// let f = _.debounce(alert, 1000);

// f("a");
// setTimeout( () => f("b"), 200);
// setTimeout( () => f("c"), 500);

// function debounce(func, ms) {
//   let timeout = null;
//   return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, arguments), ms);
//   };
// }



// function f(x) {
//   console.log(x);
// }

// // create wrappers
// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 1500);



// // function delay(f, ms) {
// //   return function() {
// //     setTimeout(() => f.apply(this, arguments), ms);
// //   };
// // }

// function delay(func, ms) {


//   return function(...args) {
//     let tempThis = this;
//     setTimeout(function(){
//       func.apply(tempThis, args)
//     }, ms);
//   };
// }

// f1000("test"); // shows "test" after 1000ms
// f1500("test"); // shows "test" after 1500ms

// function work(a, b) {
//   alert( a + b ); // work is an arbitrary function or method
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// function spy(func) {
  
//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];
//   return wrapper;

// }

// function hash() {
//   let arr = [].join.call(arguments).split(','); // 1,2
//   return arr;
// }

// let tab = hash(1, 2);

// console.log(Array.isArray(tab));
// console.log(tab);

// function printNumbers(from, to) {
//   let current = from;

//   setTimeout(function go(){
//     console.log(current);
//     if (current < to) {
//       setTimeout(go, 1000);
//     }
//     current++;
//   }, 0)
// }

// function printNumbers(from, to) {
//   let current = from;

//   function go() {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }
//   go();
//   let timerId = setInterval(go, 1000);
// }

// printNumbers(4, 10);

// let timerId = setInterval(() => console.log('tic'), 2000);

// setTimeout(() => {
//   clearInterval(timerId) ; console.log("Stop");
// }, 10000);



// let timerId = setTimeout(() => alert("never happens"), 1000);
// console.log(timerId); // timer identifier

// clearTimeout(timerId);
// console.log(timerId); // same identifier (doesn't become null after canceling)

// function sayHi(phrase, nom) {
//   console.log(phrase + ' ' + nom);
// }

// setInterval(sayHi, 2000, "Salut", "Basile");

// function sayHi() {
//   console.log("hello");
// }

// setInterval(sayHi, 2000);

// function sum(n) {
//   return function(m) {
//     return n + m;
//   }
// }

// console.log(sum(3)(4));

// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   };

//   counter.set = value => count = value;
  
//   counter.decrease = () => count--;


//   return counter;
// }

// let counter = makeCounter();

// counter.set(10);
// alert( counter() ); // 10
// counter.decrease();
// console.log(counter());

// let sayHi = function func(who) {
//   if (who) {
//     alert(`Hello, ${who}`);
//   } else {
//     sayHi("Guest"); // use func to re-call itself
//   }
// };

// sayHi(); // Hello, Guest

// function makeCounter() {

//   function counter() {
//     return counter.count++;
//   };

//   counter.count = 0;

//   return counter;
// }

// let counter = makeCounter();

// counter.count = 10;
// alert( counter() ); // 10

// function sayHi() {
//   console.log("Hi");
//   sayHi.counter++;
// }

// sayHi.counter = 0;

// sayHi();
// sayHi();
// sayHi();

// console.log(sayHi.counter);

// function ask(question, ...handlers) {
//   let isYes = confirm(question);

//   for(let handler of handlers) {
//     if (handler.length == 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }

// }

// // for positive answer, both handlers are called
// // for negative answer, only the second one
// ask("Question?", () => alert('You said yes'), result => alert(result));

// globalThis.nom = "Antony";

// console.log(globalThis.nom);

// function makeArmy() {
//   let shooters = [];

//   let i = 0;
//   for (let i = 0; i < 10; i++) {
//     let shooter = function() { // shooter function
//       alert( i ); // should show its number
//     };
//     shooters.push(shooter);
//   }
    

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // the shooter number 0 shows 10
// army[5](); // and number 5 also outputs 10...
// // ... all shooters show 10 instead of their 0, 1, 2, 3...

// let users = [
//   { name: "John", age: 20, surname: "Johnson" },
//   { name: "Pete", age: 18, surname: "Peterson" },
//   { name: "Ann", age: 19, surname: "Hathaway" }
// ];

// users.sort(byField('name'));
// users.sort(byField('age'));

// function byField(prop){
//   return function(a, b){
//     return a[prop] > b[prop] ? 1 : -1;
//   }
// }
// console.log(users)

// function inBetween(a, b) {
//   return function(x) {
//     return x >= a && x <= b;
//   }
// }

// function inArray(arr) {
//   return function(x) {
//     return arr.includes(x);
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2



// function sum(a) {
//   return function(b) { return a + b};
// }

// console.log(sum(2)(3));
// function f() {
//   let value = Math.random();

//   function g() {
//     debugger; // in console: type alert(value); No such variable!
//   }

//   return g;
// }

// let g = f();
// g();

// function f(){
//   let value = Math.random();
//   return function() {console.log(value)};
// }

// let array = [f(), f(), f()];

// array.forEach(element => {
//   element();
// });

// let arr = [3, 5, 2];

// console.log(Math.max(...arr));

// function showName(prenom, nom, ...titres){
//   titres ?
//   console.log(prenom + ' ' + nom + ' ' + titres.reduce((acc, curr) => acc + ', ' + curr, '')) :
//   console.log(prenom + ' ' + nom);
// }

// showName("Julius", "Caesar", "Consul", "Imperator");

// function addition(...arg){

//   return arg.reduce((acc, current) => acc + current, 0);
  
// }

// console.log(Math.max(3, 5, 56, 89, 43));

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function reverseList(list) {
//   if (list.next) {
//     reverseList(list.next);
//   }
//   console.log(list.value);
// }

// reverseList(list);

// for (let i = 0; i < 7 * 77 ; i++) {
//   console.log("Gloire à Dieu pour toutes choses !");
// }

// for (let i = 1; i < 21; i++) {
//   i % 3 == 0 ? console.log(i) : null;
// }

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

// function printList(list) {
//   console.log(list.value);
//   if (list.next) {
//     printList(list.next);
//   }
// }

// function loopPrintList(list) {
//   let temp = list;
//   while (temp) {
//     console.log(temp.value);
//     temp = temp.next;
//   }
// }

// printList(list);
// loopPrintList(list);

// let tableau = ["Antony", "Manon", "Basile", "Sylvestre", "Désiré"];

// console.log(tableau.reduce( (acc, current) => acc + ' et ' + current));


// function fib(n) {
//   return n > 1 ? fib(n - 1) + fib(n - 2) : n;
// }

// console.log(fib(40));

// function factorial(n) {
//   return n > 1 ? n * factorial(n - 1) : n;
// }

// console.log(factorial(5));

// function sum(n) {
//   let sum = 0;
//   for (let i = 0; i < n + 1; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function rSum(n){
//   return n > 1 ? n + rSum(n - 1) : n;
// }




// console.log(sum(100));
// console.log(rSum(10000));



// let company = { // the same object, compressed for brevity
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// function sumSalaries(department) {
//   if (Array.isArray(department)) {
//     return department.reduce((accumulator, current) => accumulator + current.salary, 0);
//   } else {
//     let sum = 0;
//     for (let subdept of Object.values(department)) {
//       sum += sumSalaries(subdept);
//     }
//     return sum;
//   }
// }




// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   occupiedBy: [{name: "John"}, {name: "Alice"}],
//   place: room
// };

// // circular references
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   if (key != "" && value == meetup) return undefined ;
//   return value;
// }));

// let user = {
//   name: "John Smith",
//   age: 35
// };

// let serialized = JSON.stringify(user);
// let deserialize = JSON.parse(serialized);

// console.log(serialized);
// console.log(deserialize);

// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// let meetup = JSON.parse(str, function(key, value) {
//   if (key == "date") return new Date(value);
//   return value;
// });

// console.log(meetup.date.getDate());

// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

// let user = JSON.parse(userData);

// console.log(user.name);

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// let json = JSON.stringify(meetup, function replacer(key, value) {
//   // console.log(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }, 2);

// let obj = JSON.parse(json);
// console.log(obj);


// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   wife: null
// };

// let json = JSON.stringify(student);
// console.log(json);

// alert( formatDate(new Date(new Date - 1)) ); // "right now"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// // yesterday's date like 31.12.16 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

// function formatDate(date){
//   let now = Date.now();
//   let difference = now - date;
//   if (difference <= 1000) {
//     console.log("Right now");
//   } else if (difference <= 60000) {
//     console.log(`${difference / 1000} sec. ago`);
//   } else if (difference <= 60000 * 60) {
//     console.log(`${difference / (60000)} min. ago`);
//   } else {
//     let yearsCropped = date.getFullYear().toString().slice(2,4);
//     console.log(
//       `${date.getDate()}.${date.getMonth()}.${yearsCropped} ${date.getHours()}:${date.getMinutes()}`
//       );
//   }
// }

// function getSecondsToTomorrow() {
//   let date = new Date();
//   return 3600 * 24 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
// }

// console.log(getSecondsToTomorrow());

// function getSecondsToday() {
//   let date = new Date();
//   return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
// }

// console.log(getSecondsToday());

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// function getDateAgo(date, jours) {
//   return new Date((date - ( jours * (24 * 3600 * 1000))));
// }

// function getLastDayOfMonth (year, month) {
//   let date = new Date(year, month + 1, 0);
//   return date.getDate();
// }

// console.log(getLastDayOfMonth(2012, 1));



// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

// function getWeekDay(date) {
//   let semaine = new Map([
//     [0, 'SU'],
//     [1, 'MO'],
//     [2, 'TU'],
//     [3, 'WE'],
//     [4, 'TH'],
//     [5, 'FR'],
//     [6, 'SA']
//   ]);

//   return semaine.get(date.getDay());
// }

// let date = new Date(2020, 1, 20, 3, 12);
// console.log(date);

// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// bench(diffSubtract);
// bench(diffGetTime);

// function bench(f) {
//   let date1 = new Date(0);
//   let date2 = new Date();
//   let start = Date.now();

//   for (let i = 0; i < 100000; i++) {
//     f(date1, date2);
//   }
//   return Date.now() - start;
// }

// let time1 = 0;
// let time2 = 0;

// for (let i = 0; i < 10; i++) {
//   time1 += bench(diffSubtract);
//   time2 += bench(diffGetTime);
// }

// console.log(bench(diffSubtract) + ' ms');
// console.log(bench(diffGetTime) + ' ms');

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = new Date();

// console.log(end - start);

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