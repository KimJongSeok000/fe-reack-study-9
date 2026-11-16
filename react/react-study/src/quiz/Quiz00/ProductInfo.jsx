import { product1, product2, product3 } from "./productData";
import { price1, price2, price3 } from "./productData";
import totalPrice from "./productData";
import { shopName, shopAddress, shopPhone } from "./shopData";

function Productinfo() {
    return (
        <div>
            <h1>온라인 쇼핑몰</h1><br></br>
            <p>쇼핑몰명 : {shopName}</p>
            <p>주소 : {shopAddress}</p>
            <p>전화번호 : {shopPhone}</p><br></br>
            <h2>상품 목록</h2><br></br>
            <p>상품1 : {product1}</p>
            <p>가격 : {price1}원</p>
            <br></br>
            <p>상품2 : {product2}</p>
            <p>가격 : {price2}원</p>
            <br></br>
            <p>상품3 : {product3}</p>
            <p>가격 : {price3}원</p>
            <br></br>
            <p>---------------------------------------</p>
            <p>총 상품 금액 : {totalPrice}원</p>
        </div>
    );
}

export default Productinfo;

/*
6. 예상 실행 결과

온라인 쇼핑몰

쇼핑몰명 : 코딩전자
주소 : 서울시 강남구
전화번호 : 02-1234-5678

상품 목록

상품1 : 노트북
가격 : 1200000원

상품2 : 키보드
가격 : 80000원

상품3 : 마우스
가격 : 35000원

------------------------
총 상품 금액 : 1315000원
*/