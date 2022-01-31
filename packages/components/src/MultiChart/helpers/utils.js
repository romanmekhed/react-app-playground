export const convertData = (data, amount) => {
  // Strip meta data
  let key = Object.keys(data).find(
    (key) =>
      key.indexOf('Time Series') !== -1 || key.indexOf('Technical') !== -1
  );
  data = data[key];

  let newData = [];

  // Process all elements
  for (key in data) {
    if (typeof amount !== 'undefined' && newData.length === amount) break;

    // Smoothen up the keys and values in each sample
    let newSample = {};
    for (let sampleKey in data[key]) {
      let newSampleKey = sampleKey.replace(/.+. /, '');
      newSample[newSampleKey] = Number(data[key][sampleKey]);
    }

    // Convert date to local time (dates from AV should be EDT)
    newSample['date'] = new Date(
      Date.parse(key) + (240 - new Date().getTimezoneOffset()) * 60000
    );

    // Insert in new data
    newData.push(newSample);
  }

  const today = new Date();
  const yearAgo = new Date(String(today.getFullYear() - 1));

  return getDataBetweenDatesInArray(newData, yearAgo, today);
};

export const getDataBetweenDatesInArray = (data, start, end) => {
  return data.filter((sample) => start <= sample.date && sample.date <= end);
};
