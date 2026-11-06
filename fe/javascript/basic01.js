
// .js 파일

// javascript 작성 영역

console.log('basic01.js');
console.log('text');
console.log('이 영역에 있는 값을 출력해라~');


// 변수 선언

// 변수 타입
// var let const

// 변수선언 : let
// 상수선언 : const  (*한번 할당/저장하면 값이 바뀌지 않는다.)

// 숫자 문자 논리형 ...

let a = 10;       //숫자타입 정수향
let b = 20.321;   //숫자타입 실수형
let c = "안녕하세요";  //문자타입
let d = '반갑습니다';  //문자타입
let e = true;   //참       논리타입
let f = false;  //거짓     논리타입

// let g = 헬로; X
let v1 = 123;       //변수 선언 + 값 저장 : 변수초기화
let v2 = 0;
let v3 = null;
let v4 = undefined;
let v5;     //변수 선언

//let v1 = 222;    // v1 변수를 다시 선언, 만들겠다 X 중복불가

// 변수명 : 숫자시작불가, $ _ 이외의 특수문자 불가, 띄어쓰기 불가, 예약어(키워드) 불가

// 변수명을 짓는 관례
/*
    like food X
    like_food O snake/underscore case
    likeFood  O camel case

    my bag price
    my_bag_price
    myBagPrice

 */

const g = 30;
const h = "헬로";

a = 20;
// g = 300' - cost 변수는 상수형 변수로 값 변경이 불가. VSCode 입력창엔 오류가 안뜨지만 Code Run 실행시 오류가 남

console.log(123123);
// console.log(abcd); 문자열은 ''나 ""로 감싸야함
console.log('abcd');
console.log('안녕 "상당히" 반가워'); // ' '' ' 나 " "" " 식으로 사용시 처음것과 다음것 사이를 문자로 인식하고 세번째것과 마지막것 사이를
console.log("안녕 '상당히' 반가워"); // 문자로 인식하여 사이에 있는 문자를 문자열로 인식하지 못해서 오류가 발생한다.
console.log("안녕 \"상당히\" 반가워"); // \는 백스페이스 왼쪽 키, 해당 키 다음의 ' "를 문자열로 인식하게 한다
console.log(`백틱문자로하면 중간에 '작은' "큰" 상관없음`); //``로 감싸면 

let x = 20;
let y;

console.log(x);
console.log(y);

//===========================================
var abc = 10;
var abc = 20;
var abc = 30;
// var 중복선언을 오류발생하지 않고 덮어쓴다.
// 오류를 발생시킬 리스크가 크므로 let을 쓴다.

z=50
console.log(z);
// let z = 500;
var z = 30;
console.log(z);
