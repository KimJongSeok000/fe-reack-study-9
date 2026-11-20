import { useState } from 'react';
import './Quiz06.css'
import ColorBox from './ColorBox';

function Quiz06() {
    let [ boxArr, setBoxArr ] = useState([ 'red', 'blue', 'green', 'black' ]);
    return (
        <div>
            <button onClick={() => { setBoxArr([ 'red', ...boxArr ]) }}>앞빨간박스추가</button>
            <button onClick={() => { setBoxArr([ 'blue', ...boxArr ]) }}>앞파란박스추가</button>
            <button onClick={() => { setBoxArr([ 'green', ...boxArr ]) }}>앞초록박스추가</button>

            <button onClick={() => { setBoxArr([ ...boxArr, 'red' ]) }}>뒤빨간박스추가</button>
            <button onClick={() => { setBoxArr([ ...boxArr, 'blue' ]) }}>뒤파란박스추가</button>
            <button onClick={() => { setBoxArr([ ...boxArr, 'green' ]) }}>뒤초록박스추가</button>

            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.shift();
                setBoxArr(temp);
            }}>잎박스삭제</button>
            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.pop();
                setBoxArr(temp);
            }}>뒤박스삭제</button>

            <div>
                {boxArr.map((item, index) => {
                    return <ColorBox bgColor={item} key={index} boxArr={boxArr} setBoxArr={setBoxArr} index={index} 
                        deleteSelf={()=>{setBoxArr(boxArr.filter(( _ , idx)=>idx != index))}}
                        />
                })
                }

            </div>
        </div>
    )
}

export default Quiz06;