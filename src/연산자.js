// 비교 연산자 : 비교 연산자는 피연산자를 비교한 뒤, 논리형 값인 참, 거짓으로 반환하는 연산을 수행한다.
// 동등 연산자
console.log(1 == "1"); // true
console.log(1 == true); // true
console.log(0 == false); // true

// 부등연산자
console.log(1 != "1"); // false
console.log(1 != true); // false
console.log(0 != false); // false

// 일치연산자 (===) : 두 값이 같은지를 비교하는데 데이터 타입도 함께 확인
console.log(1 === "1"); // false
console.log(1 === true); // false
console.log(0 === false); // false

console.log(1 !== '1'); // true
console.log(1 !== true); // true
console.log(0 !== false); // true

// 형변환 : 묵시적 형변환과 명시적 형변환이 있음
let num1 = 10 + Number("10");
console.log(num1);

/* 반복문 */
// 반복문 : 자바스크립트에서 반복문은 while, do~while, for, for-in, for-of
let brands = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
}

// 고객이 구입 가능한 음료 리스트 구하기
let productList = [
    {name: "레쓰비", price: 700}, 
    {name: "티오피", price: 1000}, 
    {name: "비타500", price: 800}, 
    {name: "포카리스웨트", price: 1100}, 
    {name: "파워에이드", price: 1200}
];
let inputCoin = 800;
let len = productList.length;
let outputList = []; // 빈 배열 생성
for(let i = 0; i < len; i++) {
    if(productList[i].price <= inputCoin) {
        outputList.push(productList[i]);  // 배열의 끝에 새로운 요소 추가
    }
}
console.log(outputList);

// for-in : 객체의 프로퍼티를 열거하는데 사용함
let person = {
    fname: "John",
    lname: "Doe",
    age: 25
};
for(let key in person) {
    console.log(person[key]); // 키 값을 이용해 해당하는 값 출력
}

// for-out : 향상된 for문과 유사
let brand = ["애플", "구글", "페이스북", "아마존", "삼성전자"];
for(let e of brand) {
    console.log(e);
}