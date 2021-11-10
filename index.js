// Write your solution here!

const cats = [ "Milo", "Otis" , "Garfield",];


function destructivelyAppendCat(name){
 cats.push(name);
}

function destructivelyPrependCat(name){
cats.unshift(name);
}

function destructivelyRemoveLastCat(name){
cats.pop();
}

function destructivelyRemoveFirstCat(name){
cats.shift();
}
   
   
function appendCat(name){
const newcats = cats.slice();
newcats.push(name);
return newcats;
}

function prependCat(name){
   const newcats = cats.slice();
   newcats.unshift(name);
   return newcats;
}

function removeLastCat(name){
const newcats = cats.slice();
newcats.pop(name);
return newcats;
}

function removeFirstCat(name){
   const newcats = cats.slice();
   newcats.shift();
   return newcats;
}
