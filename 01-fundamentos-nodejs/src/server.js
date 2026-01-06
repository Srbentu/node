import http from 'node:http';

const server = http.createServer((req, res) => {
  return res.end('Hello World !!! <3 hehe');
});

server.listen(6969);
