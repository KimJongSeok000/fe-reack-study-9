import { useState } from 'react';
import './Quiz05.css'
import ColorBox from './ColorBox';

function Quiz05() {

    // 각 박스들을 색상별로 구분해서 표시
    // 박스 색상 데이터 관리를 어떻게하느나

    // 1) 색이 담인 박스 요소가 직접 배열에 들어있는 경우(클래스로 처리)
    // let [ boxArr, setBoxArr ] = useState([
    //     <div className='box' style={{ backgroundColor: "red" }}></div>,
    //     <div className='box' style={{ backgroundColor: "blue" }}></div>,
    //     <div className='box' style={{ backgroundColor: "green" }}></div>,
    //     <div className='box' style={{ backgroundColor: "black" }}></div>,
    // ])

    //     let [ boxArr, setBoxArr ] = useState([
    //     <div className='box' quiz5-bg-red></div>,
    //     <div className='box' quiz5-bg-blue></div>,
    //     <div className='box' quiz5-bg-green></div>,
    //     <div className='box' style={{ backgroundColor: "black" }}></div>,
    // ])



    // 2) 특정 기준 코드로 박스 색상을 구분
    // let [ boxArr, setBoxArr ] = useState([ 1, 2, 3, 4 ]);

    // 3) 색상을 표시하는 값 자체를 가진 배열로 활용
    let [ boxArr, setBoxArr ] = useState([ 'red', 'blue', 'green', 'black' ]);

    // +@) 색상 박스를 컴포넌트화

    // let [ colorBox, setColorBox ] = useState([]); - 개인풀이
    return (
        <div>
            {/* 개인풀이
            <button onClick={() => {
                let temp = [ ...colorBox ];
                temp.unshift(<div className='box' style={{ backgroundColor: 'red' }}></div>)
                setColorBox(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [ ...colorBox ];
                temp.unshift(<div className='box' style={{ backgroundColor: 'blue' }}></div>)
                setColorBox(temp);
            }}>앞파란박스추가</button>
            <button onClick={() => {
                let temp = [ ...colorBox ];
                temp.unshift(<div className='box' style={{ backgroundColor: 'green' }}></div>)
                setColorBox(temp);
            }}>앞초록박스추가</button>

            <button onClick={() => {
                let temp = [ ...colorBox ];
                temp.push(<div className='box' style={{ backgroundColor: 'red' }}></div>)
                setColorBox(temp);
            }}>뒤빨간박스추가</button>
            <button onClick={() => {
                let temp = [ ...colorBox ];
                temp.push(<div className='box' style={{ backgroundColor: 'blue' }}></div>)
                setColorBox(temp);
            }}>뒤파란박스추가</button>
            <button onClick={() => {
                let temp = [ ...colorBox ];
                temp.push(<div className='box' style={{ backgroundColor: 'green' }}></div>)
                setColorBox(temp);
            }}>뒤초록박스추가</button>

            <button onClick={() => {
                let temp = [ ...colorBox ];
                temp.shift();
                setColorBox(temp);
                // setColorBox((colorbox) => { return colorbox.slice(1) });
            }}>앞박스삭제</button>

            <button onClick={() => {
                let temp = [ ...colorBox ];
                temp.pop();
                setColorBox(temp);
                // setColorBox((colorbox) => { return colorbox.slice(0, -1) });
            }}>뒤박스삭제</button>

            <br />
            <div>{colorBox}</div>
            */}

            {/* 강의내용 1)
            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.unshift(<div className='box' style={{ backgroundColor: 'red' }}></div>)
                setBoxArr(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.unshift(<div className='box' style={{ backgroundColor: 'blue' }}></div>)
                setBoxArr(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.unshift(<div className='box' style={{ backgroundColor: 'green' }}></div>)
                setBoxArr(temp);
            }}>앞빨간박스추가</button>

            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.push(<div className='box' style={{ backgroundColor: 'red' }}></div>)
                setBoxArr(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.push(<div className='box' style={{ backgroundColor: 'blue' }}></div>)
                setBoxArr(temp);
            }}>앞빨간박스추가</button>
            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.push(<div className='box' style={{ backgroundColor: 'green' }}></div>)
                setBoxArr(temp);
            }}>앞빨간박스추가</button>

            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.shift();
                setBoxArr(temp);
            }}>
            앞버튼삭제</button>

            <button onClick={() => {
                let temp = [ ...boxArr ];
                temp.pop();
                setBoxArr(temp);
            }}>
            뒤버튼삭제</button>
            <div>{boxArr}</div>
             */}

            {/* 강의내용 2)
            <button onClick={() => { setBoxArr([ 1, ...boxArr ]) }}>앞빨간박스추가</button>
            <button onClick={() => { setBoxArr([ 2, ...boxArr ]) }}>앞파란박스추가</button>
            <button onClick={() => { setBoxArr([ 3, ...boxArr ]) }}>앞초록박스추가</button>

            <button onClick={() => { setBoxArr([ ...boxArr, 1 ]) }}>뒤빨간박스추가</button>
            <button onClick={() => { setBoxArr([ ...boxArr, 2 ]) }}>뒤파란박스추가</button>
            <button onClick={() => { setBoxArr([ ...boxArr, 3 ]) }}>뒤초록박스추가</button>

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
                {
                    boxArr.map((item, index) => {
                        if (item == 1)
                            return <div className='box' style={{ backgroundColor: 'red' }}></div>
                        else if (item == 2)
                            return <div className='box' style={{ backgroundColor: 'blue' }}></div>
                        else if (item == 3)
                            return <div className='box' style={{ backgroundColor: 'green' }}></div>
                        else
                            return <div className='box' style={{ backgroundColor: 'black' }}></div>
                    })}
            </div>
            */}

            {/* 강의내용 3) - 색상이 추가되면 1, 2번보다 더 유리함. 추가 할 내용이 적다.*/}
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
                    return <div className='box' style={{ backgroundColor: item } } key={index}></div>
                })
                }
            </div>
            


            <h3>색상 박스를 컴포넌트</h3>
            <div>
                {boxArr.map((item, index) => {
                    return <ColorBox bgColor={item} key={index}/>
                })
                }
            </div>

        </div>
    )
}

export default Quiz05;