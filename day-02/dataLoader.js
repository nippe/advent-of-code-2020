const fs = require("fs");

exports.getData = () => {
  const fileData = fs.readFileSync("./data.txt", "utf8");
  return fileData.split("\n").map((row) => {
    const parts = row.replace(":", "").split(" ");
    return {
      range: parts[0],
      char: parts[1],
      pwd: parts[2],
    };
  });
};
