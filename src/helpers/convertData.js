const convertData = (chart, type) => {
  const convertedData = chart[type].map((item) => {
    return {
      date: item[0],
      [type]: item[1],
    };
  });
  return convertedData;
};

export { convertData };
