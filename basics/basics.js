/* ############################################################ */
// 1. 변수 선언: var, let, const

// // var
// console.log(x);
// var x = 1;
// console.log(x);

// // let
// // console.log(y); // ReferenceError: Cannot access 'y' before initialization
// let y = 2;
// console.log(y);

// // const
// // console.log(z); // ReferenceError: Cannot access 'z' before initialization
// const z = 3;
// console.log(z);

/* ############################################################ */

// 2. 변수 선언 키워드 들의 스코프 차이
// var: function-scoped
// let, const: block-scoped

// // var
// function varTest() {
//     if (true) {
//         var a = 1;
//     }
//     console.log(a); // 1
// }
// // console.log(a); // ReferenceError: a is not defined
// varTest();

// // let
// function letTest() {
//     if (true) {
//         let b = 2;
//     }
//     // console.log(b); // ReferenceError: b is not defined
// }
// // console.log(b); // ReferenceError: b is not defined
// letTest();

// // const
// function constTest() {
//     if (true) {
//         const c = 3;
//     }
//     // console.log(c); // ReferenceError: z is not defined
// }
// // console.log(c); // ReferenceError: z is not defined
// constTest();

/* ############################################################ */

// 3. 변수 재선언 및 재할당

// // var: 재선언 및 재할당 가능
// var r = 1;
// var r = 2;
// r = 3;
// console.log(r); // 3

// // let: 재선언 불가, 재할당 가능
// let t = 1;
// // let t = 2; // SyntaxError: Identifier 't' has already been declared
// t = 3;

// // const: 재선언 및 재할당 불가
// const u = 1;
// // const u = 2; // SyntaxError: Identifier 'u' has already been declared
// // u = 3; // TypeError: Assignment to constant variable.

/* ############################################################ */

// 4. 조건문

// // if, else if, else
// const age = 20;
// if (age >= 20) {
//     console.log("Adult");
// } else if (age >= 10) {
//     console.log("Teenager");
// } else {
//     console.log("Kid");
// }

// // switch, case, default
// const fruit = "apple";
// switch (fruit) {
//     case "apple":
//         console.log("Apple");
//         break;
//     case "banana":
//         console.log("Banana");
//         break;
//     default:
//         console.log("Other");
// }

/* ############################################################ */

// 5. 반복문

// // for
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// // while
// let j = 0;
// while (j < 5) {
//     console.log(j);
//     j++;
// }

// // do while
// let k = 0;
// do {
//     console.log(k);
//     k++;
// } while (k < 5);

/* ############################################################ */

// 6. 함수

// // 함수 선언문
// function add(a, b) {
//     return a + b;
// }
// console.log(add(1, 2)); // 3

// // 함수 표현식
// const subtract = function (a, b) {
//     return a - b;
// };
// console.log(subtract(3, 2)); // 1

// // 화살표 함수
// const multiply = (a, b) => a * b;
// console.log(multiply(2, 3)); // 6

/* ############################################################ */
