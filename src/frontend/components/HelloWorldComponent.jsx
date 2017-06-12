import Application from './class/Application'

const frontend = new Application('This is Frontend, Hello World!')

const Hello = () => {
  console.log(frontend.welcome())
}

export default Hello
