function zipStrings(strA, strB) {
  let result = "";
  let strLength = 0;
  if (strA.length > strB.length) {
    strLength = strA.length;
  } else {
    strLength = strB.length;
  }
  for (let index = 0; index < strLength; index++) {
    if (strA[index] === undefined) {
      result += strB[index];
    } else if (strB[index] === undefined) {
      result += strA[index];
    } else {
      result += strA[index] + strB[index];
    }
  }
  return result;
}
