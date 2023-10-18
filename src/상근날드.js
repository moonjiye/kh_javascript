/*  상근날드 
- prompt로 연속해서 햄버거 3개 가격과 음료 2개의 가격을 입력 받음
- 햄버거 3개 중 가장 싼 가격을 선택하고 음료둘 중 싼 음료의 가격을 합산하고 여기서 50원 할인
*/
/* 
let menu = [];
menu[0] = Number(prompt("상덕버거 가격 입력 : ", ""));
menu[1] = Number(prompt("중덕버거 가격 입력 : ", ""));
menu[2] = Number(prompt("하덕버거 가격 입력 : ", ""));
menu[3] = Number(prompt("콜라 가격 입력 : ", ""));
menu[4] = Number(prompt("사이다 가격 입력 : "));

let minB = menu[0];
let minD = menu[3];
for (let i = 0; i < menu.length; i++) {
    if (i < 3 && minB > menu[i]) minB = menu[i];
    if (i > 2 && minD > menu[i]) minD = menu[i];
};
document.write(`${minD + minB - 50}원`);
*/
/**/
function getPrice() {
    let menu = [];

    for(let i = 0; i < 5; i++) {
        menu[i] = Number(document.getElementById("menu" + (i+1)).value);
        console.log(menu[i]);
    }

    let minB = menu[0];
    let minD = menu[3];
    for(let i = 0; i < menu.length; i++) {
        if(i < 3 && minB > menu[i]) minB = menu[i];
        if(i > 2 && minD > menu[i]) minD = menu[i];
    }
    document.getElementById("value").innerHTML = (minB + minD - 50) + "원";
}
