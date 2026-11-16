import { useState } from "react";
import './quiz01.css';

function Quiz01() {
    let [ count, setCount ] = useState(0);
    return (
        <div>
            <button onClick={() => {
                setCount(count + 2);
            }}>짝수출력
            </button>
            {/* <span style={{color:'red'}}>{count}</span> */}
            <span className="quiz01-font-red">{count}</span>
        </div>
    )
}
export default Quiz01;

/*

리액트 프로젝트 내부에 폴더 및 파일을 생성하여 아래와 같은 결과가 나오도록 코드 작성.

1. 화면은 짝수출력 버튼과 빨간글씨 숫자
- 버튼 누르면 숫자가 2 4 6 8.. 짝수만 나온다.
2. src 내부에 quiz 폴더와 내부에 quiz01 폴더를 생성 후, Quiz01.js 파일명으로 컴포넌트 생성해서 진행
*App.js 에서 연결부분 설정
3. 제출

문제 해결에 관련된 파일 캡쳐 or 파일 제출
1) Quiz01.js
2) App.js 파일
3) 실행한 화면 캡쳐 1
4) 기타 css 파일 (혹시나 있으면?)

*/