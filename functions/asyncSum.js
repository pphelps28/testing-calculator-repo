async function asyncSum(a, b) {
  console.log('running math...')
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
  return result
}


module.exports = { asyncSum }