
export default function Quiz03comp({textNum}) {
    return (
        <div className="textItem">
        <p className='title'>제목 : {textNum}</p> 
        <p>내용 : 내용{textNum}</p>
        </div>
    )
}

// css 적용부위를 신경쓰자.
// 공통된 부분이 있긴해도 실질적으로 다른 값이니 따로 설정하는게 좋음.
// 변수를 {}로 구조분해할당 하지 않으면 {textNum.title}, {textNum.content}
// 강의본은 변수를 title, content 설정