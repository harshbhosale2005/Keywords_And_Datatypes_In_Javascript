console.log("hello");

// keywords used in javascript

// 1.var keyword

var a=21;
var a=20;
a=67;

console.log("Value of a:"+a);

// 2. let keyword

let b=30;
//let b=31;
b=31;

console.log("Value of b :"+b);

// 3. const keyword

const c=40;
//const c=41;
//c=41;

console.log("Value of c :"+c);

// Primitive datatypes

// 1.

let no= 1;
let marks=56.56;
console.log(no)
console.log(marks);


// 2.

let name="harsh";
let grade='A'
console.log(name);
console.log(grade);

// 3.

let isPassed=true;
console.log(isPassed);

// 4.

let accno=12345678901234567890n;
console.log(accno);

// 5.

let city;
console.log(city);

// 6.

let address=null;
console.log(address);

// 7.

let x= Symbol('pqr');
let y= Symbol('pqr');

console.log(x===y);


// Non-Primitive Datatypes

// 1. Array

let numarr=[7,6,5,4,3,2];

console.log(numarr);
console.log(numarr[2]);
console.log(numarr.length);

let names=["harsh","samir","prathemesh","musab","hrushikesh"];

console.log(names);

let grades=['a','b','c','d','e','f'];

console.log(grades);

let decnum=[12.23,57.15,67.24,84.76];

console.log(decnum);

//  2. Object

let student={
    rollno:21,
    name:"harsh",
    marks:87.98,
    grade:'A',

    address:{
        pincode:89786,
        area:"kothrud",
        city:"Pune"
    }
}

console.log(student);
console.log(student.name);
console.log(student.address.area);


// Task

let st1={
    rollno:1,
    name:"abhay",
    marks:78.00,
    grade:'A'
}

let st2={
     rollno:2,
    name:"ajay",
    marks:98.00,
    grade:'A+'
}

let st3 ={
     rollno:3,
    name:"nikhil",
    marks:72.00,
    grade:'A'
}

let st4={
     rollno:4,
    name:"harsh",
    marks:80.00,
    grade:'A'
}

let st5={
     rollno:5,
    name:"prathamesh",
    marks:66.00,
    grade:'B'
}

let st6={
     rollno:6,
    name:"samir",
    marks:78.00,
    grade:'B'
}

let st7={
     rollno:7,
    name:"rahul",
    marks:67.00,
    grade:'B'
}

let st8={
     rollno:8,
    name:"nihal",
    marks:55.00,
    grade:'D'
}

let st9={
    rollno:9,
    name:"ashok",
    marks:66.00,
    grade:'B'
}

let st10={
     rollno:10,
    name:"sohail",
    marks:85.00,
    grade:'A'
}

let starr=[st1,st2,st3,st4,st5,st6,st7,st8,st9,st10];

console.log(starr);











