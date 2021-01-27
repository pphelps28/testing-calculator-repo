function assert(result) {
  return {
    is(expected) {
      if (result !== expected) {
        throw new Error(`${result} does not equal ${expected}`)
      }
    },
    isLooselyEqualTo(expected) {
      if (result != expected) {
        throw new Error(`${result} is not loosely equal to ${expected}`)
      }
    }
  }
}
async function test(title, callback) {
  try {
    await callback()
    console.log(`✓ ${title}`)
  } catch (err) {
    console.error(`x ${title}`)
    console.error(err)
  }
}

module.exports = { assert, test }

