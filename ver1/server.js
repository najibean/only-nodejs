// const http = require('http');
// const hostname = '127.0.0.1';
const port = 3000;
const server = require('./route');

server.listen(port, () => {
   console.log(`Server is running at port : ${port}`)
});




