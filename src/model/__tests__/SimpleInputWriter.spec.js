import StringDecorator from '../StringDecorator'

test('StringDecorator.decorate', () => {
  const input = {
    text: 'Hello',
    prefix: 'before ---',
    postfix: '--- after'
  }

  const output = 'before ---Hello--- after'

  const stringDecorator = new StringDecorator(input.prefix, input.postfix)

  expect(stringDecorator.decorate(input.text)).toBe(output)
})
