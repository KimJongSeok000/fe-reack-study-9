// operator 연산자

let x = 10;
let y = 20;
let z = '30';

console.log(x);
console.log(x+10);
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(10%4); // 나머지 연산, 나머지 값을 나타냄
console.log(2**3); // 제곱연산, 3**5라면 3의 5제곱
console.log(x+x+y+y);

console.log(x);
x = 20;
console.log(x);

x = x - 5;  // a = b  =의 우측값을 a로 저장. 우측부터 계산하고 그 값을 좌측으로 보내기 때문에 지정 대상이 우측에 있을 수 있다. 
// x = x+x*x-y+y;
// 3+5*2=13
// 3+(5*2)=13
// (3+5)*2=16   사칙연산같이 괄호로 우선순위를 조정할 수 있다.

// 문자가 포함된 + 연산 : 문자형태로 이어붙이기
console.log(x+y+z);
// 10 + 15 + '30'
// 35 + '30' ->'3530'
console.log(z+x+y);
// '30' + 15 + 20
// '3015' + 20 -> '301520'

//------------------------------------------
let q = 10;
// ++ -- -
console.log(-10);
console.log(-q);
// ++ --   +1 -1
// ++q q++ --q q-- 서로 다름, 단항연산자, 우선순위 차이
// + or - 를 먼저 하느냐 나중에 하느냐
// 변수 원본값이 변경됨

// q=10
console.log(q);
console.log(q+5);
console.log(q);

console.log(q);
q = q+5
console.log(q);

//  q++는 q = q+1의 의미
q++;
console.log(q);
q--;
console.log(q);

// q = 15
console.log( q++ + 10 );
// 15+10=25로 계산
// q++ 때문에 25로 출력되고 그 이후 q가 16로 변경
console.log(q);
// q = 16
console.log( ++q + 10 );
// 1+16+10=27
// ++q 때문에 1을 먼저 더하여 27로 계산되고 그 이후에도 q가 17이 됨 
// q = 17
console.log(q);

let w = 5;
// q = 17
console.log(w); //5
w = ++q - w; // 1+17+5=13
console.log(w); // w = 13 q = 18
w = q-- + w; // 18+13=31 q = 18-1
console.log(w);  // w = 13
console.log(q); // q = 17