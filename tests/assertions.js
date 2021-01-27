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

function test(title, callback) {
  try {
    callback()
    console.log(`✓ ${title}`)
  } catch (err) {
    console.lerror(`x ${title}`)
    console.error(err)
  }
}

module.exports = { assert, test }

