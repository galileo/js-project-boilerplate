import style from '../../public/css/style.css'
import HelloWorldComponent from './components/HelloWorldComponent'

HelloWorldComponent(style)

if (module.hot) {
  module.hot.accept()
}
