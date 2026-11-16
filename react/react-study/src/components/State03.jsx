import { useState } from "react";

function State03() {
    // let arr = [ 1, 2, 3, 4, 5 ]; // 일수 배열 변수

    // let [변수, set함수] = useState(초기값);
    let [ arr, setArr ] = useState([ 1, 2, 3, 4, 5 ]);

    // 참조변수(주소) - 객체, 배열 등
    // {key:value}
    // [x,x,x]
    // {key:[]}
    // {[].{},[]}

    return (
        <div>
            <button onClick={() => {
                // 배열에 값 추가 push unshift splice
                // [1, 2, 3, 4, 5]
                // arr.push(6) [1, 2, 3, 4, 5, 6]

                /*
                console.log(arr);
                arr.push(6);
                console.log(arr);
                setArr(arr); // 뒤에 6이 추가된 arr 배열 변수
                // 주소값은 그대로 유지된다.
                */
                // 참조변수의 주소자체가 바뀌지 않기 때문에 재랜더링이 발생하지 않는다.
                // state변수의 값이 set함수를 통해서 기존의 값이 새로운 겂으로 변경되야 랜더링이 된다.

                // 깊은복사를 통해 새로운 주소에 데이터를 생성해야한다.
                // set함수(새로운주소);

                // let temp = arr; - 얕은 복사

                let temp = [...arr]; // 깊은 복사 [...[1, 2, 3, 4, 5]] -> [1, 2, 3, 4, 5]
                temp.push(6); // [1, 2, 3, 4, 5, 6]
                setArr(temp); // arr = temp;
                // state변수 arr에 값(주소)이 새로운 주소로 변경, 재랜더링조건 충족

            }}>배열변경버튼</button>
            {
                /*arr.map((val) => {
                    return <p>{val}</p>
                }) */
                arr.map((val) => (<p>{val}</p>))

            }
        </div>
    )
}

export default State03;