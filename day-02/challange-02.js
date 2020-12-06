const { isSuperValid } = require("./pwdValidator");
const { getData } = require("./dataLoader");

const pwdDb = getData();

const numberCorrect = pwdDb.reduce(
  (acc, pwdRow) => (isSuperValid(pwdRow) ? acc + 1 : acc),
  0
);

console.log("Correct Passwords: ", numberCorrect);
console.log("Incorrect Passwords: ", pwdDb.length - numberCorrect);
console.log(isSuperValid({ range: "1-3", char: "a", pwd: "abcde" }));
console.log(isSuperValid({ range: "1-3", char: "b", pwd: "cdefg" }));
console.log(isSuperValid({ range: "2-9", char: "c", pwd: "ccccccccc" }));
