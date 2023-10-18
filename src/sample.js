let isRed = false;
// let : 변수나 상수인지를 구분함
const head = document.querySelector("#head-line");
// doucument (dom) html query 문을 추적. id, class, 등등을 넣을 수 잇음

head.onclick=function() {
    if(!isRed) {
        head.style.color = "red";
        console.log("현재 컬러는 레드입니다.");
    } else {
        head.style.color = "blue";
        console.log("현재 컬러는 블루입니다.");
    }
    isRed = !isRed;
}