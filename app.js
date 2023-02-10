const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers, req.body);
    //process.exit(); salir de todo terminar el consumo 
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Hola </title> <head>');
    res.write('<body><h1>Hola Hola </h1></body>');
    res.write('</html>');
    res.end();
    //Nuevo Cambio
});

server.listen(port);