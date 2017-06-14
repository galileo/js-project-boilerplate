import style from '../../public/css/style.css'
import HelloWorldComponent from './components/HelloWorldComponent'
import { APP_CONTAINER_SELECTOR } from '../shared/config'

HelloWorldComponent(style)

document.querySelector(APP_CONTAINER_SELECTOR).innerHTML = '<h2>Welcome into sample application</h2>'

if (module.hot) {
  module.hot.accept()
}
