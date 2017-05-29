var express = require('express')
var dockerServer = require('./dockerServerSetup')

const PORT = process.env.PORT || 8080

var app = express()

dockerServer(app, process)

app.get('/', function (req, res) {
  res.send('Placeholder for your real application \n')
})

app.listen(PORT, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '🌎 Listening on port %s (Docker). Open up http://localhost:%s in your browser.',
      PORT
    )
  }
})
