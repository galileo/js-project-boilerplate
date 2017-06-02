const morgan = require('morgan')
var server = null

module.exports = {
  setup: function (app, process) {
    app.use(morgan('common'))

    app.get('/healthz', function (req, res) {
      res.send('I am happy and healthy\n')
    })

    // quit on ctrl-c when running docker in terminal
    process.on('SIGINT', function onSigint () {
      console.info('Got SIGINT (aka ctrl-c in docker). Graceful shutdown ', new Date().toISOString())
      shutdown()
    })

    // quit properly on docker stop
    process.on('SIGTERM', function onSigterm () {
      console.info('Got SIGTERM (docker container stop). Graceful shutdown ', new Date().toISOString())
      shutdown()
    })
  },
  registerGracefulShutdown: function (init) {
    server = init
  }
}

// shut down server
function shutdown () {
  if (server === null) {
    console.error('server was not defined we can not properly stop it', new Date().toISOString())
    return
  }

  server.close(function onServerClosed (err) {
    if (err) {
      console.error(err)
      process.exitCode = 1
    }
    process.exit()
  })
}
