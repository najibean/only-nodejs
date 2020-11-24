const http = require('http');
const port = 4000;

// create server object
http.createServer((req, res) => {
   let reqUrl = req.url;

   if(reqUrl === '/about') {
      res.write('about us page');
      res.end();
   }
   else if(reqUrl === '/contact') {
      res.write('contact us page');
      res.end();
   }
   else {
      res.write('Hello Najib');
      res.end();
   }
}).listen(port, () => {
   console.log(`Server start at port ${port}`);
})