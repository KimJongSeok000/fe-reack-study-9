/*
    if()

    if()

    if()
    ...

------------------------------------------------

    else 혼자 사용 불가

    if
    else

    if
    else
    else - X

    if
    else if
    else if
    eise if

--------------------------------------------------
    else if 혼자 사용 불가

    if
    else if
    else if
    else

    if
    else if
    -실행이 안될 수도 있다.

    if
    else
    -무조건 하나는 실행된다.

*/

let dice = 5; //주사위 1~6

if (dice == 1) {
    console.log('1칸 전진');
}

if (dice == 1) {
    console.log('1칸 전진');
} else {
    console.log('2칸 전진');
}

if (dice == 1) {

} else if (dice == 2) {

}
else if (dice == 3) {

}
else if (dice == 4) {

}
else if (dice == 5) {

}
else if (dice == 6) {

}

// 만약 주사위가 7이상이 뜰 수 있으면 실행 X

if (dice == 1) {

}
else if (dice == 2) {

}
else if (dice == 3) {

}
else if (dice == 4) {

}
else if (dice == 5) {

}
else {

}

// 만약 주사위가 7이상이 뜰 수 있으면 else가 실행됨

if (dice == 1) { }
if (dice == 2) { }
if (dice == 3) { }
if (dice == 4) { }
if (dice == 5) { }
if (dice == 6) { }

// 조건만 맞으면 다른 if와 같이 실행될 수 있음.
// 안물어봐도 되는 조건을 반복으로 물어보는 비효율적인 방식

// 조건식 -> 최종적으로 true false 논리형 결과.

if (dice > 10) { }

let result = dice == 3;

if (result) { }
if (result == true) { }
if (result == false) { }
if (!result) { }
if (!(result == true)) { }

if (dice > 0 && dice <= 6) { } // 주사위가 1~6이라는 조건 보장

if (dice < 1 || dice > 6) { } // 주사위가 1~6범위를 벗어나면 이라는 조건

if (!(dice < 1 || dice > 6)) { }
if ((dice < 1 || dice > 6) == false) { }

//--------------------------------------
// switch (비교하려는 대상) {}

dice = 3;

switch (dice) {
    case 1:     //dice == 1
        console.log('case 1');
    case 2:     //dice == 2
        console.log('case 2');
    case 3:
        console.log('case 3');
        break;
    case 4:
        console.log('case 4');
        break;
    case 5:
        console.log('case 5');
        break;
    case 6:
        console.log('case 6');
        break;
    default: // else와 같은 역할
}

// case가 맞으면 거기서부터 다음을 전부 실행한다.
// break;를 걸어줘야 거기에서 멈춘다.

// -----------------------------------------
console.log("---------------------------------------------------------");

/*
    출근시간 대비 해야할 일

    8시 청소
    9시 회의
    10시 업무
    11시 퇴근
*/

let showTime = 8;

if (showTime == 8) {
    //청소 회의 업무 외근
} else if (showTime == 8) {
    //회의 업무 외근
} else if (showTime == 10) {
    //업무 외근
} else {
    //외근
}

// 8.5라면?
if (showTime <= 8) { } //청소 회의 엄무 외근
else if (showTime <= 9) { } //회의 업무 외근
else if (showTime <= 10) { } //업무 외근
else if (showTime <= 11) { } //외근
else { } //결근처리

if (showTime <= 11) { } //외근
else if (showTime <= 10) { }
else if (showTime <= 9) { }
else if (showTime <= 8) { }
else { } //결근처리
// 순서가 바뀌어도 논리적으론 맞지 않아도 문법적으론 맞아서 외근만 처리됨.

if (showTime > 8) { }
else if (showTime > 9) { }
else if (showTime > 10) { }
else if (showTime > 11) { }
else { } //결근처리
// 이 역시 논리적 오류가 존재함. > 8 에서 이미 이후의 모든 조건이 충족됨.

if (showTime > 11) { }
else if (showTime > 10) { }
else if (showTime > 9) { }
else if (showTime > 8) { }
else { } //결근처리
// 부등호 사용시 크기 비교에 따른 서순을 잘 따져야함,

if (showTime <= 8) { } //청소
if (showTime <= 9) { } //회의
if (showTime <= 10) { } //업무
if (showTime <= 11) { } //외근

switch (showTime) {
    case 8:
    //청소
    case 9:
    //회의
    case 10:
    //업무
    case 11:
    //외근
}

switch (showTime) {
    case 8:
        //청소
        //회의
        //업무
        //외근
        break;
    case 9:
        //회의
        //업무
        //외근
        break;
    case 10:
        //업무
        //외근
        break;
    case 11:
    //외근
    // break;
}
