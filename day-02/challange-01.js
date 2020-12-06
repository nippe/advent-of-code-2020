const { isValid } = require("./pwdValidator");
const { getData } = require("./dataLoader");

const pwdDb = getData();
const numberCorrect = pwdDb.reduce(
  (acc, pwdRow) => (isValid(pwdRow) ? acc + 1 : acc),
  0
);
console.log("Correct Passwords: ", numberCorrect);
console.log("Incorrect Passwords: ", pwdDb.length - numberCorrect);
