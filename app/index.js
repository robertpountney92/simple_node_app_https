//Load express module with `require` directive
var express = require('express')

const https = require('https')
var app = express()

//Define request response in root URL (/)
app.get('/',   function (req, res) {
  res.send('Hello World!!!!!')
})

app.get('/.well-known/acme-challenge',   function (req, res) {
  res.send('Hello World!!!!!')
})

const fs = require('fs')

// //...

// https.createServer({
//   key: fs.readFileSync('server.key'),
//   cert: fs.readFileSync('server.cert')
// }, app).listen(8081, () => {
//   console.log('Listening...')
// })



//Launch listening server on port 8081
app.listen(80, function () {
  console.log('app listening on port 80!')
})