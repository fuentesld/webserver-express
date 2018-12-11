const http = require("http");

http
  .createServer((req, res) => {
    res.write("hola mundo");
    res.end();
  })
  .listen(8080);

console.log("web server escuchando en puerto 8080");
