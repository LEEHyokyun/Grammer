const express = require("express");
//admin.js 가져오기
const admin = require("./routes/admin");

const app = express();
const port = 3000;

//app함수에서 url요청을 받고 이후에 함수 로직이 실행되도록 설정
//req, res를 통해 사용자에게 보여주도록 설정
//사용자 출력 설정

app.get("/hyokyun", (req, res) => {
  res.send("hello express!");
});

//미들웨어
//아래 url 요청이 들어온다면, 관련 인자(admin)을 참고하라
///hyokyun이후에 추가적인 url이(아래에선 admin) 온다면 app.js에서는 관련 로직이 없으므로
//admin 인자를 참고하여, admin.js 로직을 참고하는 것임
app.use("/admin", admin);

// 웹서버 로직 구성
// 여기서는 port가 잘 설정되었는지 확인
// 포트 등
app.listen(port, () => {
  console.log("Express listened on port No", port);
});

//node http_response.js
//package.json의 script에서 별도 설정시 npm ~ 입력 안해도 됨
