const fs = require("fs");

exports.getData = () => {
  const fileData = fs.readFileSync("./data.txt", "utf8");
  const newLandscape = [];
  const rowCount = fileData.split("\n").length;
  console.log("🚀 ~ file: dataLoader.js ~ line 7 ~ rowCount", rowCount);
  const neededWidth = rowCount * 3;
  console.log("🚀 ~ file: dataLoader.js ~ line 9 ~ neededWidth", neededWidth);
  const repeatCount = fileData.split("\n")[0].length;
  console.log("🚀 ~ file: dataLoader.js ~ line 11 ~ repeatCount", repeatCount);

  // fileData.split("\n").forEach((row) => console.log(row));
};
