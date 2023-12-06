function extractClassName(sessionTitle) {
  const resultArray = [];
  const sessionTitleArray = sessionTitle.split(" ");
  if (
    sessionTitleArray.includes("Class") === false ||
    sessionTitleArray[sessionTitleArray.indexOf("Class") + 1].length !== 4
  ) {
    return null;
  } else {
    resultArray.push(
      sessionTitleArray[sessionTitleArray.indexOf("Class") + 1],
      sessionTitleArray[sessionTitleArray.indexOf("Class") + 2]
    );
  }
  switch (true) {
    case resultArray[1] === "Januar":
      resultArray[1] = "01";
      break;
    case resultArray[1] === "Februar":
      resultArray[1] = "02";
      break;
    case resultArray[1] === "März":
      resultArray[1] = "03";
      break;
    case resultArray[1] === "Maerz":
      resultArray[1] = "03";
      break;
    case resultArray[1] === "April":
      resultArray[1] = "04";
      break;
    case resultArray[1] === "Mai":
      resultArray[1] = "05";
      break;
    case resultArray[1] === "Juni":
      resultArray[1] = "06";
      break;
    case resultArray[1] === "Juli":
      resultArray[1] = "07";
      break;
    case resultArray[1] === "August":
      resultArray[1] = "08";
      break;
    case resultArray[1] === "September":
      resultArray[1] = "09";
      break;
    case resultArray[1] === "Oktober":
      resultArray[1] = "10";
      break;
    case resultArray[1] === "November":
      resultArray[1] = "11";
      break;
    case resultArray[1] === "Dezember":
      resultArray[1] = "12";
      break;
    default:
      return null;
  }
  return resultArray.join("-");
}
