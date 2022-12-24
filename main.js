// ex1
// 1
function array(arr){
arr.pop ();
arr.shift();
return arr
}
console.log(array([1,2,3,4,5]));

// 2
function color(col){
col.push(`yellow`)
col.unshift(`grey`)
return col
}
console.log(color([`red`,`blue`]));

// 3
function Five(inclu){
return inclu.includes(5)
}
console.log(Five([1,2,3,4,5]));

//4
function twoArray(arr1,arr2) {
return arr1.concat(arr2)
}
console.log(twoArray([1,2,3],[4,5,6]));

//5
function numverN(inclu){
return inclu.includes('n')
}
console.log(numverN([1,2,3,4,5,]));

//6
function stringsS(array,s){
return array.indexOf(s)
}
console.log(stringsS([`a`,`b`,`c`,`d`],`b`));

//7
function revers(rev){
let a = rev.reverse();
return a
}
console.log(revers([1,2,3,4,5]));


//8
function name1(ary) {
    let a =ary;
    if (a.length >= 5 && a.length <= 10){
        console.log(ary.reverse());
    }else{
        return ary;
    }
}
console.log (name1([1,2,3,4,5,5,5,5]));

//9
function name2(ary,n) {
    if(ary.includes(n)){
        ary.shift();
        return ary.reverse();
    } else{
        return ary
        }
}
console.log (name2([1,2,3],2));

//10
function name3(let1){
let let2 = [...let1];
console.log(let1);
console.log(let2);
}
name3([1,2]);

//11
function FirstNum(let){
console.log(let[0]);
}
FirstNum([1,2,3,3]);

//12
function lestNum(let){
console.log(let.at(-1));
}
lestNum([1,2,3,3]);

//13
function equal(let1) {
return let1.at(-1)===let1[0];
}
console.log(equal([1,2,3,4,5,6,1]));

//14
function equal1(let1) {
if (let1.at(-1)===let1[0]) {
    let1.pop();
    let1.shift();
    return let1.length;
}
else{
    return let1;
    }
    
}
console.log(equal1([1,2,2,3,4,1]));

// ex2
let weirdArray = ['Incepction','Spiderman','Tuesday']
let weirderArray = ['Green','Saturday','Friday','Wednesday']

//1
console.log(weirderArray.reverse());    

//2
let mix = weirdArray.concat(weirderArray)
console.log(mix);

//3
let movies = [mix[0],mix[1]];
console.log(movies);

//4-5
let days = ['monday',mix[2]];
console.log(days);

//6
let color = [mix.at(-1)];
console.log(color);

//7
days.push('Sunday');
console.log(days);

//8
let weekend = [days.at(-1),mix[5]];
console.log(weekend);


//ex3
//1
let practiceFile =[273.15];
practiceFile.push(42);
console.log(practiceFile);
practiceFile.push('Hello');
console.log(practiceFile);
practiceFile.push(false, -4.6, "87");
console.log(practiceFile);

//2
let cargoHold =  ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket']
cargoHold.splice(5,1,'space tether');
console.log(cargoHold);
cargoHold.pop();
console.log(cargoHold);
cargoHold.shift();
console.log(cargoHold);
cargoHold.push('20 meters');
console.log(cargoHold);
cargoHold.unshift(1138);
console.log(cargoHold);
console.log(cargoHold.length,cargoHold);
cargoHold.splice(3,0,'keys');
console.log(cargoHold);
console.log(cargoHold.indexOf('instruction manual'));
cargoHold.splice(4,1);
console.log(cargoHold);
cargoHold.splice(2,3, 'cat', 'fob', 'string cheese');
console.log(cargoHold);  

let ary1 = [1,2,3,4,5,6];
let ary2 = [6,7,8,9,10];
let con = ary1.concat(ary2);
console.log(con);

ary1.splice(1,2);
console.log(ary1);
ary2.splice(1,2);
console.log(ary2);
console.log(con);
//no

ary1.reverse();
console.log(ary1);
ary2.sort();
console.log(ary2);
console.log(con);

let str = 'In space, no one can hear you code.';
console.log(str.split());//unchanged
console.log(str.split('e'));// Issued at e
console.log(str.split(''));// Space between all letters 

let arr = ['B', 'n', 'n', 5];
console.log(arr.join());
console.log(arr.join('a'));
console.log(arr.join(''));
console.log(arr.join(""));

//ex4
let number1 =[1,2,3,4,5];
let number2 =[...number1];
number2.push(6);
console.log(number1);
console.log(number2);

let number3 =[1,2,3,4,5];
let number4 = [number3.slice[0,number3.at(-1)]];
number4.push(6);
console.log(number3);
console.log(number4);

