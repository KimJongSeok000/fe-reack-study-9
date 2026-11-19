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

    // 뉴스를 눌렀을때 Modal 창에 전달할 정보를 저장한 변수
    let [ selectedTitle, setSelectedTitle ] = useState('');
    let [ selectedLikeCount, setSelectedLikeCount ] = useState(0);

    // input 요소에서 입력된 값을 저장하는 용도
    let [ inputText, setInputText ] = useState('');
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
                    let [ count, setCount ] = useState(0);  -  실행은 됬지만 오류가 날 가능성이 높다.
                    해설본같이 단일 컴포넌트로 해결하려면 배열방식을 사용해야한다. 해설본 참조.
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
                        <div className="post-list" key={index}>
                            <h4 onClick={() => {
                                setSelectedTitle(item);
                                setSelectedLikeCount(likeCountArr[ index ]);
                                // 어떤 뉴스 눌렀는지 title, likeCount->state 변수저장 -> Modal Props 전달
                                setModalFlag(!modalFlag); // 모달창 표시 여부
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

            <div>
                <button onClick={() => {
                    let temp = [ ...news ];
                    temp[ 0 ] = "Today 긴급 속보!!!";
                    setNews(temp);
                }}>긴급제목변경</button>
            </div>

            <div>
                <input type="text" id="input_news_title" value={inputText} onChange={(event) => {
                    // 매개변수 event : 키보드 이벤트 정보
                    // event.target 이벤트가 발생한 요소 접근

                    // input창에서 입력이 발생하면 onChange 이벤트에 등록된 함수 실행
                    // -> value 값을 state 변수에 저장해둠
                    console.log(event.target.value);
                    setInputText(event.target.value);
                }} />
                <button onClick={() => {
                    /*
                        바닐라 js 스타일
                        const input_nt = document.getElementById("input_news_title")
                        let title = input_nt.value;
                        배열.push(title)
                        input_nt.value = '';
                    */

                    // input에서 입력되어 저장된 state변수값-> news배열에 추가 등록 -> 재랜더링+화면에 표시
                    /* 퀴즈 영역
                    if (!inputText == '') {
                        let temp = [ ...news ]
                        temp.push(inputText);
                        setNews(temp);
                        setInputText(''); // 입력값 저장하는 inputText satate 변수에 값을 초기화
                        likeCountArr.push(0);
                    }
                    */

                    // 강의 내용
                    // 1) 입력된 값 없이 발행되는 것 막기
                    // 사전 필터링 방식
                    // 문자 앞뒤에 있는 공백(띄어쓰기) 제거
                    // 띄어쓰기만 있을때 등록을 방지
                    // trim() - 문자열 앞뒤에 있는 공백을 제거
                    // " abcd ".trim() -> "abcd"
                    inputText = inputText.trim(); // =으로 저장하지않으면 해당 시점에만 앞뒤 공백 제거

                    if (inputText == '') {
                        alert("값을 입력하세요") // 브라우저한테 경고창을 띄우게 하는 함수.
                        setInputText(''); // 입력칸 초기화(띄어쓰기 밖에 없거나 아무것도 입력 안한상태이므로 값(텍스트) 저장할 필요없음)
                        return;
                    }
                    let temp = [ ...news ]
                    temp.push(inputText);
                    setNews(temp);
                    setInputText('');

                    // 2. 글 추가시 좋아요 숫자 작동문제 해결
                    // 기존에 뉴스 제목 배열만 추가되어 문제 발생
                    // 뉴스 제목 추가할때 그 뉴스의 좋아요 갯수에 해당하는 likeCountArr도 추가
                    // likeCountArr.push(0); - 근처 조건으로 랜더링 되긴하지만 확실하지 않고 확인이 어렵다.
                    let temp2 = [ ...likeCountArr ]
                    temp2.push(0);
                    setLikeCountArr(temp2);


                    /*
                    if (inputText != '') {
                        let temp = [ ...news ]
                        temp.push(inputText);
                        setNews(temp);
                        setInputText(''); // 입력값 저장하는 inputText satate 변수에 값을 초기화
                    }*/

                }}>뉴스발행</button>
            </div>

            {
                // modalFlag == true ? <Modal /> : null
            }
            {
                modalFlag && <Modal title={selectedTitle} likeCount={selectedLikeCount}
                    news={news} setNews={setNews} bgColor="lightblue"
                />
            }


        </div >
    )
}

export default NewsBlog;