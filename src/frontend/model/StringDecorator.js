// @flow

class StringDecorator {
  prefix: string
  postfix: string

  constructor (prefix: string, postfix: string) {
    this.prefix = prefix
    this.postfix = postfix
  }

  decorate (value: string): string {
    return `${this.prefix}${value}${this.postfix}`
  }
}

export default StringDecorator
