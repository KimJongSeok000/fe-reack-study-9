import Box from "./Box";
import { useState } from "react";

function Props02() {

    // 배열 값 변경(추가|삭제)하면서 값이 유지되어야하고 재랜더링되야함(state변수)
    let [ titleArr, setTitlearr ] = useState([ "아침", "점심", "저녁" ]);
    let [ detailArr, setDetailArr ] = useState([ "졸리다", "배부르다", "피곤하다" ]);

    return (
        <div>
            <button onClick={() => {
                /*
                    React는 데이터 기반으로 화면을 표시/조작
                    버튼을 눌렀을때, 화면에 야식 정보가 추가 표시

                    야식 정보를 배열에 추가 -> 배열의 데이터가 map으로 반복하면서 화면에 표시
                        추가한 값 보존 + 재랜더링
                */

                // 배열은 참조변수이므로 새로운 값으로 변경 인식하려면 깊은 복사를 해야함.
                let temp = [ ...titleArr ];
                temp.push("야식");
                setTitlearr(temp); // 재랜더링 발생 조건 충족.

                // let temp2 = [...detailArr];
                // temp2.push("행복하다");
                // setDetailArr(temp2);
                detailArr.push("행복하다"); // 참조변수이고 근처에 재랜더링 조건이 있기도해서 재랜더링이 된다.

                console.log(titleArr, detailArr);
            }}>야식추가버튼</button>
            {
                titleArr.map((value, index) => {
                    return (
                        // <Box title={arr[ index ]} detail={detail[ index ]} />
                        <Box title={value} detail={detailArr[ index ]} key={index} />
                        // React는 가상의 DOM을 만들고 변경점을 확인하고 그 부분만 바꿔주는데 map 사용시
                        // 바뀐 개수와 변경점 식별이 어려워 key를 달라고 한다. 없어도 실행은 되지만 경고문이 뜸
                    )
                })
            }
        </div>)
}

export default Props02