/* 3개의 정수를 입력 받아 가장 큰 수와 작은 수 구하기 */

// 입력은 propmt()
// propmt()로 입력 받은 값은 문자열로 반환 되므로 Number 
// 화면 출력은 document.write()를 사용하면 되고,

let a = Number(prompt("첫번째 수 입력 : "));
let b = Number(prompt("두번째 수 입력 : "));
let c = Number(prompt("세번째 수 입력 : "));

if(a > b) {
    if(a > c) max = a;
    else max = c;
} else {
    if(b > c) max = b;
    else max = c;
}
if(a > b) {
    if(b > c) min = c;
    else min = b;
} else {
    if(a > c) min = c;
    else min = a;
}
document.write("<h3>제일 큰 값 : " + max + " </h3>");
document.write("<h3>제일 작은 값 : " + min + " </h3>");