//프레임워크없이 웹서버만들기
//request를 받고 response를 준다

const http = require("http");

//해당 객체에 접근, 인자가 함수 자체
//http.createServer().listen(3000)가 서버를 띄우는 큰 틀 (port = 3000)
//사용자 인터페이스에 해당하는 인자를 적어주고, 이는 함수로 되어있음
//request와 response를 인자로 하는 함수는, response를 작성하여 출력

//응답성공시(200) -> 문서상단(Head) 및 type 지정문구
//response.write _ Hello Server라는 string 출력
//응답로직끝
//응답을 나타내주는 port 지정

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Server");
    response.end();
  })
  .listen(3000);
