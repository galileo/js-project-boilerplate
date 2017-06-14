class StringDecorator {
  constructor (prefix, postfix) {
    this.prefix = prefix
    this.postfix = postfix
  }

  decorate (value) {
    return `${this.prefix}${value}${this.postfix}`
  }
}

export default StringDecorator
