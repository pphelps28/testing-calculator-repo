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
    }, isGreaterThan(expected) {
      if (!(result > expected)) {
        throw new Error(`${result} is not greater than ${expected}`)
      }
    },
    isLessThan(expected) {
      if (!(result < expected)) {
        throw new Error(`${result} is not less than ${expected}`)
      }
    }
  }
}

async function test(title, callback) {
  try {
    await callback();
    (console.log(`\x1b[32m%s\x1b[0m`, `✓ ${title}`))
  } catch (err) {
    console.error(`\x1b[31m%s\x1b[0m`, `x ${title}`)
    console.error(err)
  }
}

module.exports = { assert, test }

