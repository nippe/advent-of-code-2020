exports.isValid = ({ range, char, pwd }) => {
  const [min, max] = range.split("-");

  const charCount = pwd
    .split("")
    .reduce((acc, curr) => (curr === char ? acc + 1 : acc), 0);

  return charCount >= min && charCount <= max;
};

exports.isSuperValid = ({ range, char, pwd }) => {
  const [pos1, pos2] = range.split("-");
  const pwdArray = pwd.split("");
  return (
    (pwdArray[pos1 - 1] === char || pwdArray[pos2 - 1] === char) &&
    !(pwdArray[pos1 - 1] === char && pwdArray[pos2 - 1] === char)
  );
};
