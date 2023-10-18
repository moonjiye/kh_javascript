/* 시간 정보(시간과 분)를 입력 받아 45분 일찍 설정 */

// 시간 출력 구문을 템플릿 문자열을 사용해서 출력하기 '${}'
// 1. propmt를 사용해서 시간, 분 입력 받기
// 2. 입력받은 시간을 분으로 환산으로 45분 빼기
// 3. 만약 45분 뺀 시간이 이전 날짜로 되는 경우는 24시간만큼 더해주기
// 4. 계산된 분은 다시 시간과 분으로 환산해서 document.write()로 출력시, 템플릿 문자열 사용

let hour = Number(prompt("시간 입력 : "));
let min = Number(prompt("분 입력 : "));
let calc = (hour * 60) + min;

if(calc < 45) calc = (24*60) + min;
calc -= 45;
hour = parseInt(calc/60);
min = calc % 60;

document.write(`<h2> 알람 설정 시간은 ${hour}시 ${min}분 </h2>`);
