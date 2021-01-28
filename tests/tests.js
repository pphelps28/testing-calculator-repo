const { sub } = require('../functions/sub.js')
const { sum } = require('../functions/sum.js')
const { mult } = require('../functions/mult.js')
const { div } = require('../functions/div.js')
const { test, assert } = require('./assertions')

console.log("beginning tests...\n")

test('SUB working as expected', async () => {
  const result = await sub(10, 1)
  assert(result).is(9)
})

test('SUM working as expected', async () => {
  const result = await sum(10, 1)
  assert(result).is(11)
})

test('MULT working as expected', async () => {
  const result = await mult(10, 3)
  assert(result).is(30)
})

test('DIV working as expected', async () => {
  const result = await div(12, 2)
  assert(result).is(6)
})