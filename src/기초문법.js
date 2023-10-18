// 자바스크립트 한줄 주석
/*
    여러줄 주석
*/
// 변수와 상수 : var, let const
// var : es6 이전에 사용하던 변수 생성 문법 (호이스팅 특징을 가지고 있음), 중복 선언 가능, 재할당 가능
// let : 변수 선언 문법, 자바 변수의 형태와 동일, 중복 선언 불가, 재할당 가능, es6에서 추가
// const : 상수 선언, 재할당 불가, es6에서 추가

// 문자열
let str = "문자열" + '연결 연산자 사용' + `백틱 사용 가능`;
// console.log(str);


let name1 = "제 이름은 '무니' 입니다.";
let name2 = "제 이름은 \"무니\" 입니다.";
// console.log(name2);

// 템플릿 문자열 : ``(백틱)을 사용해서 만들며, ES6에서 추가됨. 그냥 사용하면 문자열
let name = "무니";
let age1 = 30;
let addr = "서울특별시 강동구";
// console.log(`저의 이름은 ${name}, 나이는 ${age}, 주소는 ${addr} 입니다.`);

// 숫자형(Number) : 자바스크립트는 정수와 실수를 구분하지 않고 숫자형으로 취급
let num1 = 10.1;
console.log(typeof(num1)); // tpyeof는 데이터 타입을 확인하는 함수
let sum = 0.1 + 0.2; // 부동 소수점은 근사치 계산을 하기 때문에 정확한 정수값이 나오지 않음
console.log(sum); //0.30000000000000004 로 찍히는 이유, 근사치 계산법이라, 최대한 가까운 수로 만든다. 정확하게 떨어지지 않음.

// 논리형 : 참과 거짓 구분
let age = 20;
let isAdult = (age > 18) ? true : false;
// if(isAdult) console.log("성인 입니다.");
// else console.log("성인이 아닙니다.");

// undefined :변수는 선언되었지만 아직 값이 정해지지 않았음을 의미 (개발자가 대입하는 자료형이 아님)
let empty = undefined;
console.log(empty);
// null : 변수나 상수를 선언하고 의도적으로 선언한 공간을 비워둘 때 사용.
let empty2 = null;
console.log(empty2);
// undefined와 null을 묶어서 특수 자료형이라고도 합니다.

// 객체(object) : javascript의 핵심 자료형 입니다. 
// 기본 자료형을 제외하고 자바스크립트의 대부분의 자료구조는 객체로 이루어져 있음
// 객체 자료형은 배열, 객체 리터럴, 함수 등이 있음
// 배열 : 복수의 데이터를 정의할 수 있는 자료형
let score1 = [80,90,100,88];
console.log(score1);

// 자바스크립트의 배열은 자바와 다르게 모든 자료형을 저장할 수 있음
let array = ["ive", "ann", 21, true, [100,99, 88]];
console.log(array);
let array1 = [];

//객체 리터럴 : 객체를 정의하는 가장 간단한 방법이며, 자바스크립트에서 가장 많이 사용되는 문법
// 객체 리터럴은 키와 값의 한쌍으로 구성, {}(중괄호)를 이용해서 생성
// let score = [80,90,100,88];
let score = {
    kor : 80,
    eng : 90,
    mat : 100,
    scn : 87
};
console.log(score);
console.log(score.kor);
console.log(score['mat']);

const person = {
    name : "무니",
    age : 30,
    addr : "서울특별시",
    info : function() {
        return `이름 : ${this.name}, 나이 : ${this.age}, 주소 : ${this.addr} `;
    }
}
console.log(person.info());

// toString() : 배열 안의 모든 문자를 쉼표(,)를 이용해 모두 결합해서 하나의 문자열로 반환한다.
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());



