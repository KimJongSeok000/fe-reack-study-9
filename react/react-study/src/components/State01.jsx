import { useState } from "react";

function State01() {

    // React Hooks
    // useState -> 상태를 저장하는 변수. 재랜더링 발생 기준. 재랜더링 상황에서 값이 계속 유지

    // 재랜더링 발생시키는 기준
    // state 변수가 set 함수를 통해서 값이 변경된 경우 -> 화면 재랜더링(re-rendering)

    // const|let [변수명, set함수명] = useState(초기값); - useState함수를 리액트에서 불러와야함

    let [ count, setCount ] = useState(0);  // count = 0;
    /*
    function setCount (n){
        보유하고 있는 count = n;
    }
    */

    let cnt = 0; // 함수에 선언한 일반변수. 재랜더링 시점에 다시 호출되면서 값이 0으로 또 초기화된다.

    let [ num, setNum ] = useState(0);

    return (
        <div>
            <h1>State01</h1>
            <h2>일반 cnt 변수</h2>
            <p>{cnt}</p>
            <button onClick={() => {
                console.log("cnt증가 버튼 클릭");
                cnt++;
                console.log(cnt);
                num++; // state 변수를 그냥 출력
                console.log(num);
            }}>cnt증가</button>
            <br></br>

            <h2>count State변수</h2>
            <p>{count}</p>
            <button onClick={() => {
                console.log("count증가 버튼 클릭");
                // count++; 그냥 값 증가 -> 값 증가는 되지만 set함수를 통해서 바꾼게 아니라 재랜더링 안됨
                // setCount(count = count + 1); // 사용이 어색하다
                // count = count = count + 1 ;
                // 보유하고 있는 count = 매개변수;
                setCount(count + 1); // 재랜더링 발생 조건 충족
                // 보유하고 있는 count = count + 1;
                setNum(num + 1); // 재래던링 발생 조건 충족, 인근에 있는 재랜더링요소를 모하서 한번에 수행
                console.log(count); // 리액트에서 재랜더링보다 우선시되고 비동기상태라 실제 카운트와 콘솔로그값이 1씩 차이남
            }}>count증가</button>
        </div>
    )
}

export default State01;