const seed = Number(prompt("전체 응모자 수 : ", ""));
const picked = Math.floor(Math.random() * seed + 1);

document.write(`<h2>전체 응모자 수 : ${seed} 명</h2>`);
document.write("<br>");
document.write("당첨자 : " + picked + "번");