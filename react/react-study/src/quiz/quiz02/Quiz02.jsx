// 레퍼런스 참조

import { useState } from "react";

function Quiz02() {
    // 1) 텍스트로 바로 처리
    // let [ text, setText ] = useState("하나");

    // 2) flag 활용 + if else
    //  let [ flag, setFlag ] = useState(1); // 1->하나 2->둘 3->셋
    /*if (flag == 1) {
        return (
            <div style={{ textAlign: "center" }}>
                <button onClick={() => { setFlag(2); }}>
                변경버튼</button>
            </div>
        )} 추가내용필요*/

    // 3) 배열, index 활용

    let textArr = [ "하나", "둘", "셋" ];
    let [ index, setIndex ] = useState(0);

    const btn_click = () => {
        // index++;
        // if (index > 2) idex = 0;
        setIndex((index + 1) % textArr.length);
        // setIndex(idex);
    }


    return (
        <div style={{ textAlign: "center" }}>
            <p>{textArr[ index ]}</p>
            <button onClick={btn_click}
            /* {() => {
            1)
            if (text == "하나") setText("둘");
            else if (text == "둘") setText("셋");
            else setText("하나")*/

            // 2)

            // 3)
            // }}
            > 변경버튼
            </button >

        </div >
    )
}


export default Quiz02


// 하단에 텍스트와 버튼을 만듭니다.
// 버튼을 누를때마다 화면에 텍스트가 하나 -> 둘 -> 셋 -> 하나 -> 둘 -> 셋 -> 하나 ...
// 순서로 계속 변경됩니다.

// Quiz02.js 생성해서 작업하세요.
// 필요한 경우 css도 작업