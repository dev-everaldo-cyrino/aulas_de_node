const http = require('http');
const porta = 3000
const host = '127.0.0.1'

const servidor = http.createServer((req,res) => {
    res.writeHead(200,{'content-Type': 'text/html'});

    if (req.url == '/'){
        res.write('<h1> seja bem vindo <h1>')
}else if (req.url == '/curso'){
        res.write('<h1> seja bem vindo  aos nossos cursos<h1>')
}else if (req.url == '/curso/node'){
        res.write('<h1> voce selecionou o curso de node<h1>')
}
res.end()
});
servidor.listen(porta,host,()=>{console.log('servidor rodando')});