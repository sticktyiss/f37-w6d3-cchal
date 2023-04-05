sortByProduct = (arr) => {
  return arr.sort((a, b) => a * (arr.indexOf(a) + 1) - b * (arr.indexOf(b) + 1));
}

const input = [23, 2, 3, 4, 5]
const output = sortByProduct(input)
console.log(output)