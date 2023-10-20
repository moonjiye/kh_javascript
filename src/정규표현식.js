// 정규표현식을 사용하여 문자열 검색, 대체, 추출 등을 수행, 패턴 매칭
// exec() : 패턴과 일치하는 문자열을 반환, 없으면 null

// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// const result1 = pattern.exec(targetStr);
// // console.log(result1);
// const result2 = pattern.exec(targetStr);
// console.log(result2);
// test() : 문자열에서 특정 패턴과 일치하는 문자열이 있는지 검색, 있으면 true, 없으면 false
// let targetStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// const pattern = /가장+/g;
// const result1 = pattern.exec(targetStr);
// console.log(result1);
// const result2 = pattern.exec(targetStr);
// console.log(result2);

// 전화번호
// let phoneNumber = "010-5006-4146"; 
// const regex = /\d{3}-\d{3,4}-\d{4}/g;
// let rst1 = regex.test(phoneNumber);
// console.log(rst1);
// 가입 요청 버튼 활성화를 위한 조건
let isIdValid = false;
let isPwValid = false;
let isMailValid = false;
let isPhoneValid = false;

// 정규식 조건
const regexId = /^\w{8,20}$/;
// \w : 워드 문자(알파벳,숫자,밑줄_)
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
/*
    ^: 문자열의 시작을 나타냅니다.
    (?=.*[a-z]): 소문자를 최소 하나 이상 포함해야 합니다.
    (?=.*[A-Z]): 대문자를 최소 하나 이상 포함해야 합니다.
    (?=.*\d): 숫자를 최소 하나 이상 포함해야 합니다.
    (?=.*[@$!%*?&]): 특수 문자(@, $, !, %, *, ?, &) 중 하나 이상을 포함해야 합니다.
    [A-Za-z\d@$!%*?&]{8,20}: 허용되는 문자 집합(대소문자, 숫자, 특수 문자)으로 8에서 20자 사이의 길이여야 합니다.
    $: 문자열의 끝을 나타냅니다.
*/
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

// 버튼 쿼리셀렉터
const idBtn = document.querySelector("#id_confirm");
const pwBtn = document.querySelector("#pw_confirm");
const mailBtn = document.querySelector("#email_confirm");
const telBtn = document.querySelector("#phone_confirm");

// 입력값에 대한 결과 출력을 위한 쿼리셀렉터
let idCheck = document.querySelector(".id_input_check");
let pwCheck = document.querySelector(".pw_input_check");
let mailCheck = document.querySelector(".email_input_check");
let telCheck = document.querySelector(".phone_input_check");

idBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const val = document.getElementById("id_txt").value;
    checkInput(val, "id");
});
pwBtn.addEventListener("click", function(e) {
    e.preventDefault();
    const val = document.getElementById("pw_txt").value;
    checkInput(val, "pw");
});
mailBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const val = document.getElementById("email_txt").value;
    checkInput(val, "mail");
});
telBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const val = document.getElementById("phone_txt").value;
    checkInput(val, "tel");
});

function displayPhrase(type, isvalid) {
    (isvalid) ? type.textContent = "사용 가능 합니다." : type.textContent = "입력 조건이 맞지 않습니다";
    (isvalid) ? type.style.color = "blue" : type.style.color = "red";
}

function checkInput(val, type) {
    switch(type) {
        case "id" :
            if (regexId.test(val)) {
                isIdValid = true;
                displayPhrase(idCheck, true);
            } else {
                isIdValid = false;
                displayPhrase(idCheck, false);
            }
            break;
        case "pw" :
            if (regexPw.test(val)) {
                isPwValid = true;
                displayPhrase(pwCheck, true);
            } else {
                isPwValid = false;
                displayPhrase(pwCheck, false);
            }
            break;
        case "mail" :
            if (regexMail.test(val)) {
                isMailValid = true;
                displayPhrase(mailCheck, true);
            } else {
                isMailValid = false;
                displayPhrase(mailCheck, true);
            }
            break;
        case "tel" :
            if (regexTel.test(val)) {
                isPhoneValid = true;
                displayPhrase(telCheck, true);
            } else {
                isPhoneValid = false;
                displayPhrase(telCheck, false);
            }
            break;
    }
    if (isIdValid && isPwValid && isMailValid && isPhoneValid) {
        let regRegBtn = document.querySelector(".reg_req_btn");
        regRegBtn.style.background = "blue";
    }
}