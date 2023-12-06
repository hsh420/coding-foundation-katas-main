function filterApiData(apiData, mandatoryKeys) {
  const result = [];
  for (let index = 0; index < apiData.length; index++) {
    let intersection = Object.keys(apiData[index]).filter((x) =>
      mandatoryKeys.includes(x)
    );
    if (intersection.toString() === mandatoryKeys.toString()) {
      result.push(apiData[index]);
    }
  }
  return result;
}
