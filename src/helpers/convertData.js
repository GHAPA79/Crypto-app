const convertData = (chart, type) => {
  const convertedData = chart[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  return convertedData;
};

const convertDate = (timeStamp) => {
  // Convert timeStamp to Date object
  const date = new Date(timeStamp);
  // This is for get Month name of each date
  return new Intl.DateTimeFormat("en-US", { month: "short" }).format(date);
};

export { convertData, convertDate };
