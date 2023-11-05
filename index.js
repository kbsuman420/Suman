

// for (let elements of myfriends){
//     console.log(elements);
// }
// myfriends.forEach(function(elements, index, array){
//     console.log(elements + " index: ", index, array);
// })
// myfriends.forEach(element, index, array) => {
//     console.log(elements + " index: ", index, array);
// }
// const count = myfriends.unshift("kanai", "ganesh", "ramesh");
// console.log(myfriends);
// console.log(count);

const { response } = require("express");

// var myfriends = ["ram", "sam", "jadav"];

// console.log(myfriends);
// console.log(myfriends.pop());
// console.log(myfriends);

// const months = ["Jan", "Feb", "march", "April", "June", "July"];
// // const newmonth = months.splice(months.length-1,1,"dec");
// // console.log(months);
// const indexofmonth = months.indexOf("march");
// if(indexofmonth != 0){
//     const update = months.splice(indexofmonth, 1);
//     console.log(months);
// }else{
//     console.log("no data found");

// const months = ["2", "8", "7", "9", "15", "18"];
// let newarr = months.map((curele, index, arr) =>{
//     return `Index no ${index} and the value is ${curele} belong to ${arr} `
// })
// let newarrfor = months.forEach((curele, index, arr) =>{
//     return `Index no ${index} and the value is ${curele} belong to ${arr} `
// })


// const months = [2, 8, 7, 9, 15, 18];

// const newarr = months.map((element, index, arr) =>{
//     return  element * 2;
// }).filter((newelement) =>{
//     return newelement > 10;
// })
// console.log(newarr);

// let sum = months.reduce((accumulator, curEle, index, arr) =>{
//     return accumulator * curEle ;
// },)
// console.log(sum);

// const arr = [
//     ["zone_1", "zone_2"],
//     ["zone_3", "zone_4"],
//     ["zone_5", "zone_6"],
//     ["zone_7", "zone_8"]
// ];

// let flatarr = arr.reduce((accu, element) =>{
//     return accu.concat(element);
// })

// console.log(flatarr);

// let name = 'my name is \"suman kundu\"';
// console.log(name.indexOf("is"));

// var srt = "apple, mango, alu";
// let res = srt.slice(7, -2);
// console.log(res);


// console.log(res);
// let rep = pragraph.replace("suman", "man");
// console.log(rep);
// let lastchar = pragraph.length - 1;
// console.log(pragraph.charCodeAt(lastchar));

// console.log(pragraph + " " + newpragraph);
// console.log(pragraph.concat(newpragraph));
// console.log(pragraph.concat(" ",newpragraph));

// console.log(pragraph.split(","));
// let currdate = new Date();
// console.log(currdate.toString());


// let pragraph = "s,u,M,a,n,k,u,n,d,u";
// let newpragraph = "coder";
// var date = new Date();

// console.log(Math.max(5, 7, 10, 12));

// let num  = Math.random()* 10000;
// console.log(Math.round(num))

// console.log(Math.trunc(4.6));
 
// let bioData = {
//     myname : {
//         realName : "Suman Kundu",
//         channelName : "kundu technical",
//     },
//     myAge : 22,
//     getData (){
//         console.log(`my name is ${bioData.myname} and my age is ${bioData.myAge}`);
//     }
// }
// console.log(bioData.myname.channelName);

// const obj = {
//     myname : "Suman",
//     myage : 26,
//     myjob : "noo job"
// }

// let {myname, myjob, myage ,myrutine = "daily workout"} = obj;
// console.log(myrutine);

//  let myname = "suman kundu";
//  let myage = 26;
 
//  const mybio = {
//     myname : myname,
//     myage : myage
//  }
//  console.log(mybio);

// const colors = ["black", "green", "red", "yellow"];
// const myfavcolor = [ ...colors, "orange", "blue"];
// console.log(myfavcolor);

// const colors = ["red", "blue", "green", "black"];
// const ispresent = colors.includes("oo");
// console.log(ispresent);

// let myage = "26".padStart(10);
// console.log(myage);
// const person = { name : "Suman", age : 87};
// const arr = Object.entries(person);
// console.log(Object.fromEntries(arr));


// const person = { name : "suman", age: 26};
// const sperson = {...person, degree : "MCA"};
// console.log(sperson);

// const arr = [
//     ["zone_1", "zone_2"],
//     ["zone_3", ["zone_4", ["zone_5", "zone_6"]]]
// ];
// console.log(arr.flat(Infinity));

// var num = 5;
// num > 3 ? console.log("true") : console.log("false");


// const add = (a, b) =>{
//     return a+b;
// }
// const subs = (a, b) =>{
//     return a-b;
// }
// const mul = (a, b) =>{
//     return a*b;
// }
// const calculator = (num1, num2, operator) =>{
//     return operator(num1, num2);
// }
// const result = calculator(5, 2, subs);
// console.log(result);

//syncronous function 


// const first = (a) =>{
//     let b = 10;

//     const second = () =>{
//         let sum = a + b;
//         console.log(`the sum of two number is ${sum}`);
//     }

//     return second();
// }

// first(5);

//asyncronous function
// const first = () =>{
//     setTimeout(() =>{
//         console.log("it is late print");
//     }, 3000);
// }
// const second = () =>{
//     console.log("what are you doing");
//     first();
//     console.log("that is syncronous");
// }

// second();
//currying

// function sum(num1){
//     return function(num2){
//         return function(num3){
//             console.log(num1 + num2 +num3);
//         }
//     }
// }
// sum(5)(3)(8);

// const sum = (num1) => (num2) => (num3) =>{
//     console.log(num1 + num2 + num3);
// }
// sum(5)(5)(4);


gsap.to("#one", {
    width: "100%",
    ease: Expo.easeInOut,
    duration: 2
})








