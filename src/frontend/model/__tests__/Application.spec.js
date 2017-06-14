import Application from '../Application'

test('Application.spec', () => {
  const input = 'Welcome message'

  const application = new Application(input)

  expect(application.welcome()).toBe(input)
})
