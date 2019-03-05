var server =  require('../src/index')

test('server test', () => {
  expect(server.serverfn("world")).toBe("hello world!!");
});