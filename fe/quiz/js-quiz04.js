// JavaScript 배열 반복문 연습문제 (1~10번)

/*
학습 목표
for, for...in, for...of, forEach()를 사용하여 배열의 인덱스와 값에 접근하는 방법을 연습합니다.

공통 조건
- 각 문제에서 지정한 반복문을 사용하세요.
- 결과는 console.log()로 출력하세요.
*/

// 문제 1. [for문]
let scores1 = [ 10, 20, 30, 40, 50 ];
// 배열의 모든 값을 순서대로 출력하세요.
for (let i = 0; i < scores1.length; i++) {
    console.log(scores1[ i ]);
}

// 문제 2. [for문]
let numbers1 = [ 5, 10, 15, 20, 25 ];
// 배열의 모든 값을 2배로 만들어 출력하세요.
for (let i = 0; i < numbers1.length; i++) {
    console.log(2 * numbers1[ i ]);
}

// 문제 3. [for문]
let scores2 = [ 70, 80, 90, 60, 100 ];
// 각 배열 요소의 인덱스와 값을 함께 출력하세요.
// 출력 예시: 0번 : 70
for (let i = 0; i < scores2.length; i++) {
    console.log(i + "번 : " + scores2[ i ]);
};

// 문제 4. [for문]
let numbers2 = [ 1, 2, 3, 4, 5 ];
// 배열의 값을 뒤에서부터 순서대로 출력하세요.
for (let i = 4; i >= 0; i--) {
    console.log(numbers2[ i ]);
}
// let i=numbers2.lenght-1;. length는 총 길이라 1부터 시작이지만 인덱스는 0부터 시작이라 -1을 함

// 문제 5. [for...in]
let fruits1 = [ '사과', '바나나', '포도', '딸기' ];
// 각 요소의 인덱스만 출력하세요.
for (let i in fruits1) {
    console.log(i);
}

// 문제 6. [for...in]
let fruits2 = [ '사과', '바나나', '포도', '딸기' ];
// 인덱스와 값을 함께 출력하세요.
// 출력 예시: 0 : 사과
for (let i in fruits2) {
    console.log(i + ' : ' + fruits2[ i ]);
}

// 문제 7. [for...of]
let prices = [ 1000, 2000, 3000, 4000 ];
// 배열의 모든 값을 출력하세요.
for (let v of prices) {
    console.log(v);
}
// 추천 변수명 - item, pice, value... i는 보통 인덱스라는 의미고 변수명은 직관적인게 좋다.

// 문제 8. [for...of]
let numbers3 = [ 3, 6, 9, 12, 15 ];
// 각 값을 10 증가시켜 출력하세요.
for (let i of numbers3) {
    console.log(i + 10);
}
// 이 역시 변수명 i 보단 number가 더 자연스러움.

// 문제 9. [forEach]
let scores3 = [ 50, 60, 70, 80, 90 ];
// 각 요소의 인덱스와 값을 출력하세요.
scores3.forEach((value, index) => {
    console.log("인덱스 : " + index + " 값 : " + value);
})

// 문제 10. [forEach]
let names = [ '김철수', '이영희', '박민수' ];
// 각 요소를 '1번 김철수'와 같은 형태로 출력하세요.
// 번호는 1부터 시작합니다.
names.forEach((value, index) => {
    console.log(index + 1 + "번 " + value);
})