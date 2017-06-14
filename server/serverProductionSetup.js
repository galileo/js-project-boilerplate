import express from 'express'
import compression from 'compression'
import { STATIC_PATH } from '../src/shared/config'
import { isProd } from '../src/shared/util'

export default function (app) {
  if (isProd) {
    app.use(compression())
    app.use(STATIC_PATH, express.static('dist'))
    app.use(STATIC_PATH, express.static('public'))
  }
}
