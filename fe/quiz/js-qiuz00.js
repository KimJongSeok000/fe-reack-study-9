// 문제1
const name = "홍길동"; // let도 가능은 함
let age = 25;
const height = 175.5; // let
const student = true; // let, isStudent
const residence = "서울"; // let, livePlace
// 변수명 camelcase 방식으로 작성해야함. - 퀴즈 요구 조건
// 보통 논리형(true/false)에 sixxx hasxxx식으로 작성

console.log(name); //취소선이 생기는 이유는 deprecated:사라질 수도 있다고 경고 js내에선 상관x html에서 문제가능
console.log(age);
console.log(height);
console.log(student);
console.log(residence);
age = 26;
console.log(age);
// console.log('이름 : ' + name) = '이름 : '+ '홍길동' = 이름 : 홍길동


// 문제2
let price = 1000;
let quantity = 5;
const productName = "사과";

console.log(price);
console.log(quantity);
console.log(productName);
price = 1500;
quantity = 10;
console.log(price);
console.log(quantity);
// productName = "배";
// const 상수형 변수이므로 값을 바꿀 수 없기때문에 오류가 발생한다.


// 문제3
let a = 10;
let b = 20;
let c;

console.log(a); // 10
console.log(b); // 20
console.log(c); // undefined - 변수 선언만 했지 값을 입력하지 않았기 때문에 undefined으로 출력된다.
// 변수 초기화가 안되어있기 때문, 값을 안줘서 등으로도 설명 가능

a = 100;
b = a; // a의 값을 b로 저장한다.

console.log(a); // 100
console.log(b); // 100
// 실행 결과와 예상 결과가 일치함.


// 문제4
// let 1name = "김철수";
let name_1 = "김철수"; // 변수명 시작에 숫자가 들어가면 안됨. 문제 1에 name이 있어 name_1로 변경 name1도 가능
// let user age = 30;
let user_age = 30; // 변수명 사이에 띄어쓰기가 있으면 안됨. userAge도 가능
// let user-name = "이영희";
let user_name = "이영희"; // 변수명에 _ 나 $ 를 제외한 기호 사용불가. -를 _로 변경. userName도 가능
// let const = 100;
let cost = 100; // 변수명에 const라는 문법적인 키워드(변수 키워드) 사용 불가. cost로 변경. constVariable 또는 constVar가 더 적합
let my_score = 95; //정상
let $price = 5000; //정상
let _count = 10; //정상

console.log(name_1);
console.log(user_age);
console.log(user_name);
console.log(cost);
console.log(my_score);
console.log($price);
console.log(_count);