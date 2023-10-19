/*  함수 선언문 : function 키워드로 생성, 호이스팅에 영향을 받음 */
// 호이스팅 : 해석을 용이하게 하기 위해 맨 위에 가져다 놓고 시작을 함

// 전역변수 사용은 가능하지만 결과값에 영향을 주므로 가급적이면 사용은 비추
// let test = 10000;
// console.log(sum(10,20));
// console.log(sum(100,200));


// function sum(p1, p2) {
//     return test + p1 + p2;
// }

// 함수표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅은 적용되지 않음, 네이밍 함수와 익명의 함수로 만들 수 있음
// const gugudan = function(dan){
//     for(let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${dan*i}`);
//     }
// }
// gugudan(5);

// 화살표 함수 : ES6에서 추가된 새로운 함수 선언 방법, 함수 선언식 보다 간결하고 가독성이 좋아 많이 사용됨
// const gugudan = (dan) => {
//     for(let i = 1; i < 10; i++) {
//         console.log(`${dan} * ${i} = ${dan*i}`);
//     }
// }
// gugudan(5);

// const sum = (num1, num2 = 100) => num1 + num2;
// 자바스크립트에서는 매개변수의 수만큼 전달하지 인수를 전달하지 않아도 오류가 발생하지 않음
// console.log(sum(10));

// 기본값 할당 : 
// 람다함식 : 생략가능한건 모두 줄임


// 스코프란? 변수가 생성되고 소멸되는 영역, 영향을 미치는 범위
// let a = 10; // 전역 스코프
// function sum() {
//     let a = 10; // 지역 스코프이자 블록 스코프
//     console.log(`함수 내부 : ${a}`);
    
//     //var a = 10;
//     //함수인 경우 var로 선언된 경우 함수 맨 위 까지만 끌어올리면 된다.
//     // 중괄호({})를 벗어나면 사용하지 못함
// }
// sum();
// console.log(`함수 외부 : ${a}`);

// let a =10;
// {
//     let b=20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`);  

// 참조 우선순위
// let a = 10;
// const b = 20;
// function sum() {
//     let a =50;
//     const b=70;
//     console.log(`함수 내부 a : ${a}`);
//     console.log(`함수 내부 b : ${b}`);
// }
// sum();

// let a = 10;
// let b = 20;
// {
//     let a = 30;
//     let b = 40;
//     console.log(`함수 내부 a : ${a}`);
//     console.log(`함수 내부 b : ${b}`);
// }

// 즉시 실행 함수 : 함수를 정의하자마자 발로 실행되는 함수
(function() {
    init();
})();

function init() {
    console.log("초기화 루틴을 수행합니다.");
    let defaultUrl = "127.0.0.1";
    let defaultPort = "3030";

    for(let i=0; i < 100; i++) {
        console.log(i);
    }
}