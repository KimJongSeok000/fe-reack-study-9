
let product1 = "노트북";
let product2 = "키보드";
let product3 = "마우스";
let price1 = 1200000;
let price2 = 80000;
let price3 = 35000;

let totalPrice = price1 + price2 + price3;

// export {product1, product2, product3, price1, price2, price3}; 으로 한번에 해도 됨.
export {product1, product2, product3};
export {price1, price2, price3};
export default totalPrice;