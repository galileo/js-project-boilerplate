// @flow

class Application {
  welcomeText: string

  constructor (applicationWelcomeText: string) {
    this.welcomeText = applicationWelcomeText
  }

  welcome () {
    return `${this.welcomeText}`
  }
}

export default Application
