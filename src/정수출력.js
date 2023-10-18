/* n개의 정수를 입력 받아 n * n 출력 */

let n = Number(prompt("정수 출력 : ", ""));
for(let i = 1; i<=n*n; i++) {
    document.write("<span class=nbyn>" + i + "</span>");
    if(i % n == 0) document.write("<br>");
}