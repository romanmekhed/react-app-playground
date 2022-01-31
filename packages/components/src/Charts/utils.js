export const convertData = function (data, amount) {
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
      newSample[sampleKey] = Number(data[key][sampleKey]);
    }

    // Convert date to local time (dates from AV should be EDT)
    newSample['date'] = new Date(
      Date.parse(key) + (240 - new Date().getTimezoneOffset()) * 60000
    );

    // Insert in new data
    newData.push(newSample);
  }

  return newData;
};

export const getPercentageDifference = function (a, b) {
  let number = (((a - b) / a) * 100).toFixed(2);
  let formattedValue = number > 0 ? `+${number}%` : `${number}%`;
  return { number, formattedValue };
};

export const getDataBetweenDatesInArray = function (data, start, end) {
  return data.filter((sample) => start <= sample.date && sample.date <= end);
};

export const formatXAxis = (date) => {
  if (date instanceof Date) {
    let d = date;
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d);
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d);
    return `${mo} ${ye}`;
  }

  return null;
};

export const initYearTicks = (firstDate, years) => {
  const uniqueYears = years;
  uniqueYears.shift();
  uniqueYears.unshift(firstDate.toISOString());

  // to leave a space for prediction calculations
  const oneYearAhead = new Date(
    new Date().setFullYear(new Date().getFullYear() + 1)
  );
  const aheadDateYear = oneYearAhead.getFullYear();
  if (oneYearAhead.getMonth() > 5) {
    uniqueYears.push(new Date(String(aheadDateYear)));
    uniqueYears.push(new Date(String(aheadDateYear + 1)));
  } else {
    uniqueYears.push(oneYearAhead);
  }

  return uniqueYears.map((date) => new Date(String(date)));
};

export const getYearsRange = (months) => {
  const ascendingArray = (start, end) => {
    return Array.from({ length: end - start }, (x, i) => i + start);
  };

  const yearsLength = Math.round(months / 12);
  const currentYear = new Date().getFullYear();
  const startYear = currentYear - yearsLength;
  const yearsArray = ascendingArray(startYear, currentYear);
  yearsArray.push(currentYear);

  return yearsArray;
};
