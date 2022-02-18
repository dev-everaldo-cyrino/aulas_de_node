const http = require("http");
http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, { 'content-Type': 'text/plain' });
    resposta.write("hello world")
    resposta.end()
}).listen(5000);