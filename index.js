// //npx ทุกครั้งถ้ามันรันไม่ได้ เช่น npx nodemon index.js

// console.log("Hello");

// //let รับค่าอะไรก็ได้
// let x = 10;
// console.log(typeof x);
// x = "Kaniknan";
// console.log(typeof x);

// //const เป็นค่าคงตัว จะใส่ค่าใหม่ไม่ได้
// const y = 5;

// console.log("50" - 5);

// string

const firstName = "Kaniknan";
const lastName = "Wohan-klong";
// console.log(firstName[0]);

// concate ต่อ string

const fullName = firstName + " " + lastName;
// console.log(fullName);
const fullNameWithIntro = "Your firstname is " + firstName + " Your last name is " + lastName;
// console.log(fullNameWithIntro);

const concateWithGrave = `Your firstname is ${firstName} Your last name is ${lastName}`;
// console.log(concateWithGrave);

// string method

// console.log(firstName.length)

const upperCase = firstName.toUpperCase();
// console.log(upperCase);
const lowerCase = lastName.toLowerCase();
// console.log(lowerCase);

const withSpace = " HelloTrim ";
// console.log(withSpace);
const noSpace = withSpace.trim();
// console.log(noSpace);

const token = "Bearere=1234567";
const userLong = "Ton,Bing,Heng,Ter,Newton";
// console.log(token);
const splitWord = token.split("=");
const splitName = userLong.split(" , ")
// console.log(splitWord[1]);
// console.log(splitName);

// number

const numbA = 10;
const numbB = 20;

// console.log(numbA + numbB);
// console.log(numbA - numbB);
// console.log(numbA * numbB);
// console.log(numbA / numbB);
// console.log(numbA % numbB);
// console.log(numbA ** numbB);

const floatA = 1.23456;
const ceil = Math.ceil(floatA);
const floor = Math.floor(floatA);

// console.log(`Ceil is ${ceil} Floor is ${floor}`);

// Boolean

const t = true;
const f = false;
const score = 0;
const undef = undefined;
let TestUndef;
// console.log(TestUndef);
const nu = null;
// if(score != undefined){
//     console.log("True");
// } else {
//     console.log("Falsy")
// }

// array //////////////////////////////////////////

// no need to ประกาศ size
const arr = [1, 2, 3, 4, 5];
// console.log(arr[4]);
// console.log(arr.length);

// array method

// const namesArr = [];
// console.log(namesArr, ":orginal");
// namesArr.push("Ton"); // add
// console.log(namesArr, ":After push");
// namesArr.pop();
// console.log(namesArr, ":After pop"); // delete last
// namesArr.unshift("John"); // add index fist
// console.log(namesArr, ":After unshift");
// namesArr.shift(); // delete first
// console.log(namesArr, ":After shift");

// Object /////////////////////////////////////////

const userObject = {
    username: "Username1",
    password: "Password1",
};

// console.log(userObject.username);
// console.log(userObject.password);
userObject.email = "test01@gmail.com";
// console.log(userObject);
// console.log(userObject.email);
// console.log(userObject["username"]);

// use case

const theme = {
    day: "#00f7ff",
    night: "#000",
};
const statusTheme = "night"
const setTheme = theme[statusTheme];
// console.log(setTheme);
///////////////////////////////////////////////////

// Primitive value & non Primitive value

// Primitive = number, boolean
// non Primitive = string, array, object

// Pass by value
// Pass by refference

const x = 10;
let y = 5;

y = x; //10
y = y + 10; //20
// console.log(y, ":y"); // 20
// console.log(x, ":x");

// Pass by refference example

let user1 = {
    name: "user1",
    age: 20,
};

let user2 = {
    name: "user2",
    age: 15,
};

// worst case
// user2 = user1;

// console.log(user2, ":user2");
// user2.name = "User2Fr"
// console.log(user2, ":user2");
// console.log(user1, ":user1");

// best

user2 = {...user1};
user2.name = "User2Fr";
// console.log(user2, ":user2");
// console.log(user1, ":user1");

/////////////////////////////////////

// function

function sumNumber(n1 ,n2) {
    // console.log(n1, n2, ":from function");
    return n1 + n2;
    console.log("Hello");
}

const sum = sumNumber(5, 6);

// secret of functions

const sum2 = sumNumber;
const xe = sum2(2, 4);
// console.log(xe, ":from sum2 function");

// func คือ () => {}
// const sumByArrowFunc = (n1, n2) => {
//     return n1 + n2;
// }; 

const sumByArrowFunc = (n1, n2) => n1 + n2

// console.log(sumNumber(2, 3), ":Sum from normal fn");
// console.log(sumByArrowFunc(2, 3), ":Sum from arrow fn");

// callback fn

function CallBackContainer () {
    Callback();
    console.log("Callback Container logic");
}

function Callback() {
    console.log("Callback logic");
}
// console.log(CallBackContainer());

// Array.map(()=>{}) เดี๋ยวสอน

//////////////////////////////////////////

// block control
// if-else ,switch case

// if else
const money = 3;
const national = "TH"
const age = 15;
// if (money > 5 || national == "TH") {
//     console.log("Enough");
// } else if (money <= 4) {
//     console.log("Almost")
// } else {
//     console.log("Not enogh");
// }

// == เท่ากันแค่ข้างใน , === เท่ากันทั้งข้างในแล้วก็ชนิดตัวแปร
if(age === "15"){
    // console.log("Adult");
}

const role = age > 15 ? "Adult" : "Kid";

/// switch case

switch(1){
    case 1:
        // console.log("Hello one")
        break;
    case 2:
        // console.log("Hello two")
        break;
    default:
        // console.log("Not one or two");
}

//// Alternative object for switch

// ข้อเสีย คือ ไม่มี default 
const objectSwitch = {
    1: "Hello one",
    2: "Hello two"
};

// console.log(objectSwitch["2"]);
objectSwitch["3"] = "Hello three" // add เพิ่มได้
// console.log(objectSwitch["3"]);
// console.log(objectSwitch["4"] ?? "Not in case"); // ?? บอกว่าถ้าไม่มีให้ใส่คำใน "" แทน

// Loop ///////////////////////////////

// for
// for(let i = 0; i < 5; i++){
//     console.log(`This is ${i} round`);
// }

// while
// let round = 0;
// while (round < 5){
//     console.log(`This round ${round}`);
//     round++;
// }

// array loop
// foreach
const nums = [1, 2, 3, 4, 5];

// nums.forEach((value, index)=>{
//     console.log(`This is round of elements ${value} at index ${index}`);
// });


// map กับ forEach เหมือนกันเลย แต่เพื่อนใช้ map มากกว่า เพราะสั้นกว่า 4 ตัว

// nums.map((value, index)=>{
//     console.log(`This is round of elements ${value} at index ${index}`);
// });

// ใช้หาสิ่งที่กำหนดอะ
// const noThree = nums.filter((value)=> value === 3) 
// console.log(noThree);

// *** ////////////////////////////// map and filter is important /////////////////////////////////////

// const fnA = () => {}
// const fnB = () => {}

// // ต้องประกาศก่อนว่าเป็น function async แล้วค่อยไปใส่ว่าให้ await ตรงไหน
// async function TestAsync(){
//     await console.log("Hello")
//     console.log("eeee")
// }

//////////////////////////////////////////
const axios = require("axios");

// how to จัดการ error เบื้องต้น
// try{
//     const data = axios.get("https://pokeapi.co/api/v2/pokemon/ditto");
//     console.log(data);
// }catch(error){
//     console.log("Error occured");
// }

// await ใช้ใน func เท่าน้านนนนน
async function FetchpokenAPI(name){
    try{
        // console.log("loading.........")
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        console.log(data.data); // ตัวแปรชนิด object
    }catch(error){
        console.log("Error occured");
    // }finally{
    //     console.log("Finish loading!");
    }
}
FetchpokenAPI("ditto");
