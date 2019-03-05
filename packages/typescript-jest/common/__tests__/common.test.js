var common =  require('../src/index')

test('common test', () => {
  expect(common.commonfn("world")).toBe("hello world");
});