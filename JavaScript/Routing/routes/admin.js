//로그인시 들어오는 요청 / url들이 모두 보관되는 장소
// 어떤 기능을 하는지 유추할 수 있도록 js파일 명명을 하는 것이 중요

const express = require("express");
const router = express.Router();

//router 객체에 대한 내장함수 사용
//get함수
//해당 url 요청을 받으면 이후 로직을 통해 사용자에게 응답
router.get("/", (req, res) => {
  res.send("admin 이후 url");
});

router.get("/products", (req, res) => {
  res.send("admin/products이후 url");
});

//admin.js 파일을 export 조치하기.
//이 파일은 app.js에서 import(require)하여 사용한다.
module.exports = router;
