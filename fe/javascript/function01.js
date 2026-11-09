// function = 함수
// 어떤 동작, 기능을 나타낸 코드 뭉치
// 매개변수, 리턴

/*
    function 함수명 (매개변수) {
        실행코드;
        실행코드;
        실행코드;
        ...
        return 리턴값;
    }

    함수에 따라서 옵션임
    매개변수 O X
    return O X
 */

// 매개변수 X   return X
function func01() {
    console.log('func01 함수 실행됨');
    console.log('함수 실행 코드 01');
}
// 실행이 아니라 함수를 선언(정의)만 한 것.

// 함수 호출 (call), ()까지 붙어야 호출됨.
func01();
func01();
func01();

let fn01 = 50;
fn01 = 60;
console.log(fn01);

// 매개변수 O   return X
function func02(name) {
    console.log("func02 함수 실행됨");
    console.log("매개변수 : " + name);
}

func02(); // 함수 호출할때 ()를 하면 매개변수에 들어갈 값을 전달하지 못함.
func02(1234);
func02("코카콜라");

function func02_2(a, b) { // 매개변수가 2개
    console.log("func02_2 함수 실행됨");
    console.log("매개변수 a :" + a);
    console.log("매개변수 b :" + b);
}

func02_2(10, 20);
func02_2('콜라', '사이다');

// 매개변수 X   return O
function func03() {
    console.log("func03 함수 실행됨");
    console.log("func03 리턴 500 나갈거임");
    return 500;
}

func03(); // 호출시 return값이 출력되진 않는다.
let temp = func03(); // 다만 함수를 변수로 지정할 수 있다.
console.log("func03의 return값 : " + temp);
console.log("func03의 return값 : " + func03());

console.log("func03의 return값 : " + func01()); // func01()은 return이 없음

// 매개변수 O   return O
function func04(n) {
    console.log("func04 함수 실행");
    console.log("넘겨준 값을 * 10 해서 돌려줌");
    return n * 10;
}

func04(10);

let result = func04(5);
console.log(result);
console.log(func04(50));
console.log(func04(123));
console.log(func04(990));