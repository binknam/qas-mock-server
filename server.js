// server.js
var jsonServer = require('json-server')
var server = jsonServer.create()
var router = jsonServer.router('db.json')
var middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
    req.query = req.body;
    console.log(req.query);
  }
  next();
});

// If you need to scope this behaviour to a particular route, use this
server.post('/comments', function (req, res, next) {
  req.method = 'GET'
  req.query = req.body
  next()
})

server.use(router)
server.listen(3000, function () {
  console.log('JSON Server is running')
})