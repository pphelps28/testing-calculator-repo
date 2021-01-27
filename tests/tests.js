const { sum } = require('../functions/sum.js')
const { sub } = require('../functions/sub.js')
const { assert, test } = require('./assertions.js')

function sumTest() {
  const result = sum(5, 1)
  const expected = 6
  assert(result).is(expected)
}
test('sum adds numbers', sumTest)

function subTest() {
  const result = sub(5, 1)
  const expected = 4
  assert(result).is(expected)
}
test('sum subtracts numbers', subTest)