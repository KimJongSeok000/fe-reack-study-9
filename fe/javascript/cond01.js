// 조건문 if 문
// if 만약에~

// if (조건식) {실행할 코드} - 조건식이 참(true)면 실행하겠다.

let num = 15;
// 전역변수, 전체 지역에서 확인 가능한 변수

if (num > 5) {
    console.log('num이 5보다 크다');
    console.log('if문 {}안에 코드 실행');
}

if (num >= 10)
    console.log('num이 10보다 크거나 같다');

if (num == 10)
    console.log('num이 10과 다르다1');
console.log('num이 10과 다르다2');
console.log('num이 10과 다르다3');
// {}를 제외하면 그 다음 한줄이 종속된다. 그 다음것들의 들여쓰기는 의미X, 파이썬은 의미O
/* if (num == 10){
    console.log('num이 10과 다르다1');
    console.log('num이 10과 다르다2');
    console.log('num이 10과 다르다3'); */ // 위와 결과값이 다름

console.log(num);

let x = 3;
let y;
if (num > 0) {
    console.log('num이 0보다 크더라');
    // {}영역은 인식되는 지역을 구분 {}영역 안에 {}가 계속 들어 갈 수 있다.
    let x = 10 // {}영역 내의 x값
    console.log(x);
    x = 50;
    console.log(x);
    // let y = 33;
    y = 33;
    y = y + 7
    console.log(y);
}

console.log(x);
console.log(y);


// if(조건식 - 결과가 treu냐 false냐가 들어가아햠) {}

x = 3;
let b1 = (x < 10);
if (x < 10) {
    console.log("111");
}
if (b1 == true) {
    console.log("222");
}
if (b1) {
    console.log("333");
}

// 택시 탑승 여부를 비교
/*
if (늦게 일어났나? && 버스 배차가 먼가? && 내가 다리를 다쳤나?){}
let 택시탑승여부 = 늦게 일어났나? && 버스 배차가 먼가? && 내가 다리를 다쳤나?
if (택시탑승여부){}
*/


// if else - 2지선다

let z = 10;
if (z > 10) { // 참이면
    console.log('z가 10보다 크다');
} else {// 위 조건식이 거짓이면 실행 (그게 아니면)
        // z가 10보다 작거나 같다.
    console.log('z가 10보다 크지 않다'); // z가 10이거나 10보다 작다.
}

/*
    if(){}

    if(){}

    if(){}

    if(){}

    if(){}
    else(){}

    else(){} - 실행불가 조건이 주어지지 않음.
*/