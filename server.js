import express from 'express'
import dockerSetup from './server/serverDockerSetup'
import serverDevelopmentSetup from './server/serverDevelopmentSetup'
import serverProductionSetup from './server/serverProductionSetup'
import { WEB_PORT, APP_NAME } from './src/shared/config'
import { isProd } from './src/shared/util'
import tpl from './src/server/render-app'

const app = express()

const setups = [
  dockerSetup.setup
]

if (isProd) {
  setups.push(serverProductionSetup)
} else {
  setups.push(serverDevelopmentSetup)
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
