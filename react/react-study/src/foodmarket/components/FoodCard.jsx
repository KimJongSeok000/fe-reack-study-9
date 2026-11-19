import { Button, Card } from "react-bootstrap";
import food1 from '../img/food1.jpg';
import food2 from '../img/food2.jpg';
import food3 from '../img/food3.jpg';

// props 라고 받으면 props.food.id 형태로 . 을 계속 붙여야함
function FoodCard({ food, foods, index }) {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={food1} /> */}
            {/* http://localhost:5173/images/food1.jpg */}
            {/* images/food1.jpg : 앞에 기본주소가 없으면 현재 기준으로 추적하여 이동*/}
            {/* 그렇지 않으면 앞에 주소를 계속 바꿔야하는 상황이 나옴 */}
            <Card.Img variant="top" src={import.meta.env.BASE_URL + food.imgPath} />
            {/* 기본주소는 물론 베이스 주소가 바뀐것을 따라간다 */}
            {/* <Card.Img variant="top" src={food.imgPath} /> */}
            {/* base 경로가 바뀌면 오류가 발생할 확률이 높다 */}
            <Card.Body>
                <Card.Title>{food.title}</Card.Title>
                <Card.Text>
                    {/* {food.content} */}
                    {foods[ index ].content}
                </Card.Text>
                <Card.Text>
                    {food.price}
                </Card.Text>
                <Button variant="primary">상세보기</Button>
            </Card.Body>
        </Card>
    )
}

export default FoodCard;