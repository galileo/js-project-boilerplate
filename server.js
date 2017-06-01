const fs = require('fs')
const path = require('path')
const express = require('express')

const PORT = process.env.PORT || 8080
const app = express()

const setups = [
  require('./server/serverDevelopmentSetup'),
  require('./server/serverDockerSetup')
]

setups.map(function (setup) { setup(app, process)})

app.get('/', function (req, res) {
  res.send(fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8'))
})

app.listen(PORT, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info(
      '🌎 Listening on port %s (Docker). Open up http://localhost%s in your browser.',
      PORT,
      PORT === 80 ? '' : ':' + PORT
    )
  }
})
