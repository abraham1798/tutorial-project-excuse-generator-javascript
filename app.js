let who = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];

const excuse = document.getElementById("#excuse");

let randtext1=  who [Math.floor(Math.random() * who.length)];
let randtext2=  what [Math.floor(Math.random() * who.length)];
let randtext3=  when [Math.floor(Math.random() * who.length)];

console.log(randtext1 + ' ' + randtext2 + ' ' + randtext3);

document.getElementById('excuse').innerHTML =  randtext1 + ' ' + randtext2 + ' ' + randtext3;