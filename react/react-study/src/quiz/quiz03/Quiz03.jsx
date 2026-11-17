import './Quiz03.css'
import Quiz03comp from './Quiz03comp';

function Quiz03() {
    let textArr = [ "하나", "둘", "셋", "넷", "다섯" ];
    // let titleArr = [ "하나", "둘", "셋", "넷", "다섯" ];
    // let contentArr = [ "내용하나", "내용둘", "내용셋", "내용넷", "내용다섯" ];
    return (
        <div className="App">
            {textArr.map((text) => {
                return (
                    <Quiz03comp textNum={text} />)
            })
            }
            {/*
                배열 사용하지 않는 케이스
                <Quiz03comp title="하나" content="내용하나"/>
                둘 내용둘 ...
                
                배열 사용하는 케이스
                titleArr.map((title, index)=>{
                    return (
                    <div className="textItem">                
                    <p className='title'>제목 : {titleArr[index]}</p> - titleArr[index]대신 title 가능
                    <p>내용 : {contentArr[index]}</p>
                    )
                })

                배열과 컴포넌트 활용
                titleArr.map((title, index)=>{
                    return (
                        <Quiz03comp title={title} content={contentArr[index]}/>
                    )
                })
             */}
        </div>
    );
}

export default Quiz03;