import "./FoodMarket.css"
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import { Container, Nav, Navbar, Spinner, Button, Row, Col, Card } from 'react-bootstrap';

import banner_bg from './img/banner_bg.jpg';
import food1 from './img/food1.jpg';
import food2 from './img/food2.jpg';
import food3 from './img/food3.jpg';

import foodsData from "./data/foodsData";
import { useState } from "react";
import FoodCard from "./components/FoodCard";
import { Routes, Route, Link, useNavigate } from "react-router";
import CustomerService from "./pages/CustomerService";
import Home from "./pages/Home";

function FoodMarket() {

    let [ foods, setFoods ] = useState(foodsData);

    /*
        url주소(접속경로) 이동 - 페이지 새로고침, 새로운 페이지로 이동
        <a href="경로"> - html방식
        location.href = "경로" - js방식

        react-router 이동
        현재 html 페이지를 유지하면서 url 주소 표기가 바뀌면 그 주소일때 보여주는 화면요소로 전환(지웠다가 다시 그리기)
        Link to=주소 - 브라우저 주소를 이동하고 브라우저가 바뀐 주소를 인식하여 그게 맞게 보여줌. html의 a태그같이 작성 및 출력
        navigate(주소)
    */

    let navigate = useNavigate();
    // useNavigate를 import하고 navigate를 선언하여 사용.

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    {/* <Navbar.Brand onClick={() => { location.href = "/" }}>FoodMarket</Navbar.Brand> */}
                    <Navbar.Brand onClick={() => { navigate("/") }}>FoodMarket</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link onClick={() => { navigate("/detail") }}>Food Detail(상세)</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/info") }}>Info</Nav.Link>
                        <Nav.Link onClick={() => { navigate("/help") }}>고객센터</Nav.Link>

                        {/* <Nav.Link><Link to="/info">고객센터</Link></Nav.Link>
                        <Nav.Link href="/help">고객센터</Nav.Link> */}

                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home foods={foods} />} />
                <Route path="/help" element={<CustomerService />} />
                <Route path="/detail" element={<div><h1>detail page</h1></div>} />
                <Route path="/info" element={<div><h1>info page</h1></div>} />
                <Route path="/test" element={<div><h1>이곳은 테스트</h1></div>} />
                <Route path="/*" element={<div><h1>잘못된 접근입니다. 경로를 확인하세요.</h1></div>} />
                {/* *는 CSS에서와 같이 all이라는 의미. */}
            </Routes>

            {/* 
                이미지 사용 (연결)
                html에서 연결할때는 상대 경로로 연결
                <img src="./images/a.png"/>
                <img srx="../../monday/coffe.jpg"/>

                React 방식
                상대 폴더 경로로 연결하지 않는다.
                작업물 빌딩시 css, html, js를 통합후 배포용 폴더로 재조립하므로 상대경로를 찾아가지 못한다.
                React 컴포넌트 방식에서 이미지 사용시
                1. import 이미지
                2. 외부 이미지 url 경로
                3. css에서 이미지 경로
                    .main-bg{url('./img/banner_bg.jpg');} 이미지 상대경로
                4. public 폴더에 이미지를 미리 저장해놓고 접근/사용
                현재 실행중인 서버에 public 경로를 통해 image 접근 가능
                서버가 외부 url 이미지에 접근하듯이 해당 서버 역할을 한다.
                <img src="http://localhost:5173/images/food1.jpg"/>
                <img src="images/food1.jpg"/>
                현재 접속한 사이트 주소 + 뒤에 경로
                
                <img src="http://localhost:5173/images/food1.jpg"/>
                <img src="http://hellowfdmarket/fd/images/food1.jpg"/>

                패키지 매니저 별로 설정

                CRA : src={process.env.PUBLIC_URL + food.imgPath}
                    설정파일 package.jon
                        "homepage" : "/fdmarket/"

                Vite : src={import.meta.env.BASE_URL + food.imgPath}
                    설정파일 vite.config.js
                        base:'/fdmarket/'

             */}

            {/*<img src={banner_bg} /> - import 사용
            <img src="https://images.pexels.com/photos/35519304/pexels-photo-35519304.jpeg" />
            */}

            {/* <div className="main-bg" style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div> */}


            {/* bootstrap 한줄 기준 : 12 */}
            {/* <Container>
                <Row>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food1} />
                            <Card.Body>
                                <Card.Title>{foods[ 0 ].title}</Card.Title>
                                <Card.Text>
                                    {foods[ 0 ].content}
                                </Card.Text>
                                <Card.Text>
                                    {foods[ 0 ].price}
                                </Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food2} />
                            <Card.Body>
                                <Card.Title>{foods[ 1 ].title}</Card.Title>
                                <Card.Text>
                                    {foods[ 1 ].content}
                                </Card.Text>
                                <Card.Text>
                                    {foods[ 1 ].price}
                                </Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} sm={4} xxl={3}>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={food3} />
                            <Card.Body>
                                <Card.Title>{foods[ 2 ].title}</Card.Title>
                                <Card.Text>
                                    {foods[ 2 ].content}
                                </Card.Text>
                                <Card.Text>
                                    {foods[ 2 ].price}
                                </Card.Text>
                                <Button variant="primary">상세보기</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container> */}


            {/*<Button variant="primary">Primary</Button>
            <Button variant="danger">Danger</Button>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>*/}
        </div>
    )
}

export default FoodMarket