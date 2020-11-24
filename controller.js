const url = require('url');
const users = require('./userData');

const availableEndpoints = [
   {
      'method': 'GET',
      'getUsers': '/users'
   },
   {
      'method': 'POST',
      'createUser': '/users'
   }
]


exports.getUsers = function(req, res) {
   const reqUrl = url.parse(req.url, true); //??????
   
   let response = [
      {
         'msg': 'Here are the list of users'
      },
      users
   ];

   res.statusCode = 200;   // tidak perlu dicaantumkan juga bisa
   res.setHeader('content-Type', 'Application/json');
   res.end(JSON.stringify(response));

}

// hanya berhasil jika menggunakan exports dibandingkan module.exports
exports.createUser = function(req, res) {
   body = '';

   req.on('data', function (chunk) {
      body += chunk;
   })

   req.on('end', function() {
      postBody = JSON.parse(body);
      let response = [
         {
            'text': 'User added successfully'
         },
         postBody
      ]

      res.statusCode = 201;   // tidak perlu dicantumkan juga bisa
      res.setHeader('content-Type', 'Application/json');
      res.end(JSON.stringify(response));
   })
}


exports.invalidUrl = function (req, res) {
   let response = [
      {
         'message': 'oops! that is a wrong endpoint, here are the available endpoints'
      },
      availableEndpoints
   ]

   res.statusCode = 404;
   res.setHeader('content-Type', 'Application/json');
   res.end(JSON.stringify(response));
}