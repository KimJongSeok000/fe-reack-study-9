function ColorBox({ bgColor, boxArr, setBoxArr, index, deleteSelf}) {

    return (
        <div className='box' style={{ backgroundColor: bgColor }}>
            <button onClick={() => {
                // let temp = [ ...boxArr ];
                // temp.splice(index, 1);
                // setBoxArr(temp);

                setBoxArr(boxArr.filter((_, idx)=>idx != index))
            }}>X</button>
            <button onClick={deleteSelf}>함수로X</button>
        </div>
    )
}

export default ColorBox;