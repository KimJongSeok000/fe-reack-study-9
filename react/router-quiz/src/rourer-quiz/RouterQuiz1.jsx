import { Routes, Route, useNavigate, Link } from "react-router"
import Info from "../pages/Info";

function RouterQuiz1() {
    let navigate = useNavigate();

    return (
        <div>
            <div>
                <button onClick={() => { navigate("/") }}>Main</button>
                <button onClick={() => { navigate("/info") }}>/info</button>
                <button onClick={() => { navigate("/mypage") }}>/mypage</button>
                {/* <button onClick={() => { navigate("/cart") }}>/cart</button> */}
                <button><Link to="/cart">/cart</Link></button>
            </div>
            <Routes>
                <Route path="/" element={<div><h1>Main</h1></div>} />
                <Route path="/info" element={<Info />} /> {/*외부에서 불러오는 방식*/}
                <Route path="/mypage" element={<div><h1>mypage 영역입니다.</h1></div>} />
                <Route path="/cart" element={<div><h1>cart 영역입니다.</h1></div>} />
            </Routes>
        </div>
    )
}

export default RouterQuiz1