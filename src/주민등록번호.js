// 길이 체크, 하이픈이 있는지 체크
// 성별 확인 123456-1234567
// 현재 년도 - 태어난 년도 = 나이
let jumin;
while(true) {
    jumin = prompt("주민등록번호 : ", "");
    if(jumin.length != 14) alert("입력 오류 : 다시 입력 하세요.");
    else {
        if(jumin.indexOf("-") == -1) alert("하이픈이 누락되었습니다");
        else break;
    }
}
let gender = jumin.charAt(7); 
let gerderStr;
if (gender == "1" || gender == "3") gerderStr = "남성";
else gerderStr = "여성";

let birthYear = jumin.substring(0, 2); 
if(gender == "1" || gender == "2") { 
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear; 
birthYear = Number(birthYear); 

const date = new Date(); 
const currYear = date.getFullYear(); 
let age = currYear - birthYear; 

document.write("<p class='box'> 성별 : " + gerderStr + "<br>" + "나이 : " + age + "</p>");