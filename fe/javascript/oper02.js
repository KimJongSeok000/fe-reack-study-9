// oper02.js

let x = 10;

x = x + 10;
x = x - 5;
x = x / 3;

// 복합대입연산자 - 간단하지만 가독성이 떨어짐
x += 10; // x에 10을 더하여 x에 저장
x -= 5;
x /= 3;
// *=
// %=


// 비교연산자

// = : 대입연산자
// == : 같은가?
// != : 다른가?
// > < >= <= (부등호)
x = 10;
let y = 10;
let z = '10';

console.log(x == y);
console.log(x != y);
console.log(x > 5);
console.log(x <= 20);

let r1 = x <= 20;
console.log(r1);

// == 값이 같은가
// === 값 + 타입(자료형)까지 같은가
console.log(x == z);
console.log(x === z);

console.log(x === y);

// &&    ||    !
// and   or   not

/*
        조건1    조건2   결과
    &&  true    true   true
        true    false  false
        false   true   false
        false   false  false

    ||  true    true   true 
        true    false  true
        false   true   true
        false   false  false

    !   true           false
        false          true
*/

x = 10;
y = 20;

console.log(x > 5 && y > 0);
//          true  &&  true   = true
console.log(x == 1 || y === '20');
//          false  ||   fasle   = false
console.log(!true);

let b = false;
console.log(b);
console.log(!b);

console.log(!(x > 5 && y > 0));
console.log(!(x > 5) && y > 0); // !도 ()로 우선순위 지정 가능


// 삼항연산자 - if보다 간단하게 쓸 수도 있지만 가독성 부분때문에 잘 사용되지 않음

// (조건식(true/false)) ? 항목1 : 항목2 ;
//                       true   false    - true면 항목1 false면 항목2가 됨.

console.log(x == 10 ? '10이랑 같음' : '10이랑 다름');
console.log(y == 10 ? '10이랑 같음' : '10이랑 다름');

let r2 = x + (x == 10 ? 10 : 20);  // x == 10이 true 므로 10 + 10이 된다.
console.log(r2);


//------------------------------------------------
// 타입변환 (형변환)
// String() - 문자로 변경
// Number() - 숫자로 변경

console.log('-------------------');
let q = 10;
let w = '20';
let e = 30;

console.log(q + e);
console.log(q + w + e);

console.log(q + String(e)); // 10 + '30' = 1030
console.log(q + Number(w) + e); // 10 + 20 + 30 = 60
console.log(Number('123321'));
console.log(Number('123.456'));

//---------------------------------

// &&를 조건식 처럼 사용 (React)
q = 10;
if (q == 10) {
    console.log('q 가 10이더라');
}

q == 10 && console.log('q 가 10이더라');
q == 11 && console.log('q 가 11이더라'); // 앞이 거짓이면 뒤의 것을 판단하지 않고 실행조차 하지 않는다.
q != 11 && console.log('q 가 11이 아니더라');

console.log(10 == 10);
console.log(10 == 10.0); // 다른 언어에선 소수점을 따질 수도 있다.
console.log(10 === 10);
console.log('10' == '10.0');
console.log(Number('10') === Number('10.0'));