const { numbers } = require("./data");
// console.log("🚀 ~ file: index.js ~ line 2 ~ numbers", numbers);
// console.log(numbers.length);
for (i = 0; i < numbers.length; i++) {
  for (k = 0; k < numbers.length; k++) {
    // if (numbers[i] + numbers[k] === 2020) {
    //   console.log("The answer is: ", numbers[i] * numbers[k]);
    // }
    for (j = 0; j < numbers.length; j++) {
      if (numbers[i] + numbers[k] + numbers[j] === 2020) {
        console.log("Whoop: ", numbers[i] * numbers[k] * numbers[j]);
      }
    }
  }
}
