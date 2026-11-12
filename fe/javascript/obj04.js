// js 배열 관련 함수

// const { useState } = require("react");

// 기본 배열
let arr = [ 10, 20, 30, 40 ];

// 반복문 for, for in, for of, forEach

// 1) map
// 배열 안의 요소들을 하나씩 접근하면서 반복실행, 수행 후 return 가능
arr.map(() => {  // 단순 반복을 요소의 숫자만큼 한다.
    console.log("arr map()");
});

// 요소로 반복 : forEach
arr.forEach(() => {
    console.log("arr forEach()");
});

arr.map((item) => {  // 매개변수 1개짜리 콜백함수 선언 -> item 매게변수에는 배열 요소의 값 주입
    console.log('arr map()' + item);
});

arr.map((item, index) => {  // 매개변수 2개짜리 콜백함수 선언 -> item : 값 index : 인덱스(순번) 주입
    console.log('arr map()' + item + ' ' + index);
});

let result1 = arr.map(() => {
    return 99;
});
console.log(result1);
// [10,20,30,40] -> return 99 -> [99,99,99,99]

let result2 = arr.map((item) => {
    console.log(item);
});
console.log(result2); // return이 없으므로 undefind가 배열 형태로 출력된다.

let result3 = arr.map((item) => {
    return (item + 100);
});
console.log(result3);

let result4 = arr.map((item, index) => {
    return "index : " + index + "value : " + item;
});
console.log(result4);

let menuArr = [ "라면", "우동", "김밥" ];
let result5 = menuArr.map((menu, index) => {
    return "<p>" + (index + 1) + "번." + menu + "</p>";
});
console.log(result5);

let result6 = menuArr.map((menu, index) => "<p>" + (index + 1) + "번." + menu + "</p>")
console.log(result6);
// ()=>{return xxx;} ()=> xxx

// 2) filter
// 실행 결과값(return)이 참인 요소만 모아서 return을 한다.
arr = [ 10, 20, 30, 40 ];
let result7 = arr.filter((value) => {
    return true;
});
console.log(result7);

let result8 = arr.filter((value) => {
    return (value > 25);
});
console.log(result8);

arr = [ 1, 2, 3, 4, 3, 3, 2, 1, 2 ];
let result9 = arr.filter((value) => {
    return value == 3;
    // return value != 3;
    // return value == 5;
});
console.log(result9);

// 3) find
// return이 true 인 요소를 찾는 기능. 못찾으면 undefined
let result10 = arr.find((value) => {
    return value == 3; // true? false?
});
console.log(result10);

// 4) findIndex
// return이 true인 요소의 인덱스를 찾는 기능. 못찾으면 -1
let result11 = arr.findIndex((value) => {
    return value == 3; // true? false?
});
console.log(result11);
if (result11 == -1)
    console.log("못찾았다. 그런거 없다.");


//---------------------------------------------

// 구조분해할당 (Destructuring Assignment)

let arr2 = [ 10, 20, 30 ];
console.log(arr2);
console.log(arr2[ 2 ]);

let [ n1, n2, n3 ] = [ 77, 88, 99 ];
console.log(n1, n2, n3);
// console.log(n1[1]); 이미 기본 숫자형 데이터인 상태로 배열이 아니다. []로 접근할 인덱스가 없기 때문에 undefined.

let [ num, setNum ] = [ 123, 456 ];

function func1() {
    console.log("func1() 함수 호출");
}
func1();

let [ v, f ] = [ 50, func1 ]; // 함수의 정보를 넣을때 함수명 뒤에 ()를 뺌

console.log(v); // 변수
f(); // 함수

let obj = {
    num1: 30,
    num2: 50
};
console.log(obj.num1);
console.log(obj.num2);

let obj2 = obj;

let { num1, num2 } = obj;
console.log(num1, num2);

//--------------------------------------------

let [ count, setCount ] = useState(0);

function useState(n) {
    let v = n;
    function setV(input) { // set 함수
        v = input;
    }
    return [ v, setV ];
}

console.log(count);
setCount(10);
console.log(count);