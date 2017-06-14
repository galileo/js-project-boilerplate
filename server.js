import express from 'express'
import compression from 'compression'
import dockerSetup from './server/serverDockerSetup'
import serverDevelopmentSetup from './server/serverDevelopmentSetup'
import { WEB_PORT, APP_NAME, STATIC_PATH } from './src/shared/config'
import { isProd } from './src/shared/util'
import tpl from './src/server/render-app'

const app = express()

const setups = [
  dockerSetup.setup
]

if (!isProd) {
  console.log('deve')
  // setups.push(serverDevelopmentSetup)
} else {
  app.use(compression())
  app.use(STATIC_PATH, express.static('dist'))
  app.use(STATIC_PATH, express.static('public'))
}

setups.map(function (setup) { setup(app, process) })

app.get('/', function (req, res) {
  res.send(tpl(APP_NAME))
})

const server = app.listen(WEB_PORT, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info(isProd ? 'Production env' : 'Development env')
    console.info(
      '🌎 Listening on port %s (Docker). Open up http://localhost%s in your browser.',
      WEB_PORT,
      WEB_PORT === 80 ? '' : ':' + WEB_PORT
    )
  }
})

dockerSetup.registerGracefulShutdown(server)
