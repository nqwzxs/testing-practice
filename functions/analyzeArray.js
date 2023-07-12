const analyzeArray = (array) => {
  const average = array.reduce((a, b) => a + b, 0) / array.length;
  const min = array.sort()[0];
  const max = array.sort().at(-1);
  const length = array.length;

  return { average, min, max, length};
}

export default analyzeArray;