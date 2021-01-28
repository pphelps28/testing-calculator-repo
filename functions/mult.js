async function mult(a, b) {
  const result = await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a * b);
    }, 1000);
  });
  return result
}


module.exports = { mult }