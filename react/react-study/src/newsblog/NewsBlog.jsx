import "./NewsBlog.css";
import { useState } from "react";
import Modal from "./Modal";

function NewsBlog() {
    // 제목같이 잘 바뀌지 않는 내용
    // 하드코딩(텍스트가 직접 작성되있는) vs 일반변수 vs State변수
    let title = "Blog Header";

    let [ news1, setNews1 ] = useState("어제의 뉴스");
    let [ news2, setNews2 ] = useState("오늘의 뉴스");
    let [ news3, setNews3 ] = useState("내일의 뉴스");

    let [ news, setNews ] = useState([ "어제의 뉴스", "오늘의 뉴스", "내일의 뉴스" ]);
    let [ likeCount, setLikeCount ] = useState(0);

    let [ likeCountArr, setLikeCountArr ] = useState([ 0, 0, 0 ]); // 퀴즈 해설본

    let [ modalFlag, setModalFlag ] = useState(false);

    return (
        <div>
            <div className="black-nav">
                <h3>{title}</h3>
                {/* <h3>Blog Header</h3> */}
                <div style={{ color: "orange", fontSize: "20px" }}>React Study</div>
            </div>

            {/* 강의 내용
            <div className="post-list">
                <h4 onClick={() => {
                    // modalFlag 값 변경
                    // setModalFlag(true); - 나타나기만 함
                    // if (modalFlag) { setModalFlag(false); }
                    // else { setModalFlag(true); }
                    // setModalFlag(modalFlag ? false : true);
                    setModalFlag(!modalFlag); // !false -> true | !true -> false
                    // 재랜더링 조건
                }}>{news[ 0 ]}<span onClick={(event) => {
                    // event.preventDefault(); 발생하는 이벤트의 기본 수행을 막는다.           
                    event.stopPropagation(); // 이벤트 발생을 추가로 전파나 전달하는 것을 멈춤.
                    setLikeCount(likeCount + 1); // 재랜더링 조건
                }}>♥</span> {likeCount}</h4>
                <p>내용</p>
            </div>
            */}

            {/* 퀴즈영역
            <div>
                {news.map((val, index) => {
                    let [ count, setCount ] = useState(0);
                    return (
                        <div className="post-list" key={val}>
                            <h4 onClick={() => {
                                setModalFlag(!modalFlag);
                            }}>{news[ index ]}
                                <span onClick={(event) => {
                                    event.stopPropagation();
                                    setCount(count + 1);
                                }}>♥</span> {count}</h4>
                            <p>내용</p>
                        </div>
                    )
                })}
            </div>
             */}

            {/* 퀴즈 해설 - 반복처리, 해당 요소의 인덱스를 교체해서 반복입력
            <div className="post-list">
                <h4 onClick={() => { setModalFlag(!modalFlag); }}>{news[ 0 ]}
                    <span onClick={(event) => {
                        event.stopPropagation();
                        // setLikeCount(likeCount + 1);
                        // liceCountArr 배열에서 현재 이 뉴스를 나타내는 인덱스의 값 + 1
                        // 배열[0]+1 -> 값 증가 ->재랜더링 값 증가 표시해야함. 배열을 깊은복사하여 새로운 배열값을 만들고 set함수사용.
                        let temp = [ ...likeCountArr ];
                        temp[ 0 ] += 1;
                        setLikeCountArr(temp); // 재랜더링 조건 충족
                    }}>♥</span> {likeCountArr[ 0 ]}</h4>
                <p>내용</p>
            </div>
             */}

            {/* 퀴즈 해설 - 배열로 처리 */}
            {
                news.map((item, index) => {
                    return (
                        <div className="post-list">
                            <h4 onClick={() => {
                                setModalFlag(!modalFlag);
                            }}>{news[ index ]}
                                <span onClick={(event) => {
                                    event.stopPropagation();
                                    let temp = [ ...likeCountArr ];
                                    temp[ index ] += 1;
                                    setLikeCountArr(temp);
                                }}>♥</span> {likeCountArr[ index ]}</h4>
                            <p>내용</p>
                        </div>
                    )
                })
            }



            {
                // modalFlag == true ? <Modal /> : null
            }
            {
                modalFlag && <Modal />
            }


        </div >
    )
}

export default NewsBlog;