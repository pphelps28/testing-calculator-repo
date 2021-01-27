const { asyncSub } = require('../functions/asyncSub.js')
const { asyncSum } = require('../functions/asyncSum.js')
const { test, assert } = require('./asyncAssertions')

test('Asynchronous Subtraction Functions as expected', async () => {
  const result = await asyncSub(10, 1)
  assert(result).is(9)
})

test('Asynchronous Addition Functions as expected', async () => {
  const result = await asyncSum(10, 1)
  assert(result).is(11)
})