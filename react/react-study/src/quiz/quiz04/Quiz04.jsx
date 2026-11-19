import { useState } from 'react';
import './Quiz04.css';

function Quiz04() {
    // let [arr, setArr] = useState([0]); - 배열의 길이를 늘리며 반복

    // 반복 회수를 나타낸 숫자 한개만 담는 변수
    let [ cnt, setCnt ] = useState(1);
    let arr = [];
    for (let i = 0; i < cnt; i++) {
        arr.push(<div className="box" key={i}>박스</div>);
    }

    return (
        <div>
            <div style={{ margin: "10px" }}>
                <button onClick={() => {
                    // let temp = [...arr, 1]; // temp.push(arr.length+1);
                    // setArr(temp);
                    // 단순 반복횟 용도로 사용하는 arr 배열(값 상관없이 갯수늘리기)

                    setCnt(cnt + 1);

                }}>추가
                </button>
            </div>

            <div>
                {/* {arr.map((value, index) => {
                    return <div className="box" ket={index}>박스</div>
                })} */}

                {/* {arr} - 반복문 사용*/}

                {
                    [ ...Array(cnt) ].map((_, index) => { // 첫번째 변수는 value(값)인데 사용하지 않을경우(index만 사용) _나 $를 쓰기도한다.
                        // [...Arrat(변수)] - 변수값의 갯수만큼의 자리를 가진(undefined) 임시배열 생성
                        return <div className="box" key={index}>박스</div>
                    })
                }

            </div>
        </div>
    )
}

export default Quiz04;