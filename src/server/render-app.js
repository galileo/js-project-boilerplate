// @flow

import { STATIC_PATH } from '../shared/config'

const renderApp = (title: string): string => (
  `<!doctype html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${title}</title>
    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
    <h1>${title}</h1>
  
    <div class="container" id="root"></div>
  
    <script src="${STATIC_PATH}/bundle.js"></script>
  </body>
  </html>`
)

export default renderApp
