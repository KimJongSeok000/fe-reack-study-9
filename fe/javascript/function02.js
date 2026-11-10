
// 기본 함수
function fun01() {
    console.log("func01()");
}
fun01();

//let const - 함수는 보통 고정이기 때문에 상수인 const를 써서 선언한다.
const func02 = function () {
    console.log("func02()");
}

func02();

const func03 = function func0303() {
    console.log("func03()");
}

func03();
// func0303(); - 함수 인식 못함
// 등호의 의미를 생각해보자.
// func02와 func03의 형태는 사실상 동일

// 화살표함수 (Arrow Function)

const func04 = () => {
    console.log("func04()");
}
func04();

// -------------------------------------

// 함수선언 + 매개변수
function func05(a, b) {
    console.log("func05() " + a + " " + b);
}
func05(10, 20);
func05("a", "b");

const func06 = function (a, b) {
    console.log("func06() " + a + " " + b);
}
func06(12, 34);

const func07 = function func0707(a, b) {
    console.log("func06() " + a + " " + b);
}
func07(56, 78);

const func08 = (x, y) => {
    console.log("func08() " + x + " " + y);
}
func08("hello", "hi");

// -----------------------------------------
// 함수 리턴

// 두개의 매개변수를 받아서 두 값의 합을 반환(return)
function sum1(a, b) {
    // return a + b;
    let sum = a + b;
    return sum
}

let r1 = sum1(10, 20);
console.log(r1);
console.log(sum1(55, 56));

const sum2 = function (a, b) {
    return a + b;
}
console.log(sum2(552, 756));

const sum3 = (a, b) => {
    return a + b;
}
console.log(sum3(111, 222));

// 화살표함수 -> 뒤에 중괄호 없이 바로 나오는 값을 return 값으로 인식처리
const sum4 = (x, y) => x + y;
//{return x + y;}
console.log(sum4(10, 9));

const sum5 = () => 1 + 2 + 3 + 4 + 5;
console.log(sum5());

// --------------------------

function ff1() {
    let w = 33000;
}

if (true) {
    let q = 10;
}
{
    let e = 213;
}
// console.log(e); - {}는 지역을 구분하는 역할을 한다.
for (let r = 1; r < 10; r++) { }
// console.log(r);

// -----------------------------------------

// 호이스팅 - 선언이 밑에 있어도 위로 올라가 적용된다.
// var를 쓰지 않는 이유가 호이스팅 때문


//var w;
console.log(w);
var w = 3;

// var r;
r = 3000;
var r;
console.log(r);

// 함수 호이스팅
// function check(){}

check();
function check() {
    console.log("check() ! ! !");
}
check();

// 일회용 함수 - 전역에 이름을 오염시키지 않기 위해 사용.
// 내부의 함수명이나 변수명을 외부에서 사용해도 문제가 되지 않기 위함.

(function onetime(){
    let x = 10;
    let y = 20;
    console.log("일회용 함수");
})(); // 일회용 함수 선언 및 바로 호출
// onetime();으로 호출 불가

{
    let x = 10;
    let y = 20;
    console.log("일회용 함수");
}
