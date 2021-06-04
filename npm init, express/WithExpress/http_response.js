const express = require("express");
const { a } = require("../Grammer/module_export");

//express 내장모듈에서 app함수를 가져오기.
const app = express();
const port = 3000;

//app함수에서 url요청을 받고 이후에 함수 로직이 실행되도록 설정
//req, res를 통해 사용자에게 보여주도록 설정
//사용자 출력 설정

app.get("/hyokyun", (req, res) => {
  res.send("hello express");
});

// 웹서버 로직 구성
// 여기서는 port가 잘 설정되었는지 확인
// 포트 등
app.listen(port, () => {
  console.log("Express listened on port No", port);
});

//node http_response.js
//package.json의 script에서 별도 설정시 npm ~ 입력 안해도 됨
