//promise chaining
//key : value
//실질적으로 넘겨주는 변수는 key, 즉 p1_text로
//p1_text 변수를 선언해줘야함
//then 이후 넘겨받는 변수로부터 접근하여 사용
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p1_text: "p1" });
  }, 1000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ p2_text: "p2" });
  }, 3000);
});

/*Promise Chaining_비권장방법
p1.then((r1) => {
  console.log(r1.p1_text);
  return p2;
}).then((r2) => {
  console.log(r2.p2_text);
});
*/

//Promise 권장방법
//Promise 객체들이 배열로 들어간다
Promise.all([p1, p2]).then((result) => {
  console.log(result[0].p1_text);
  console.log(result[1].p2_text);
});
