const uniqueValues = (data) => {
  console.time('uniqueValues');
  const set = new Set(data.flat());
  console.timeEnd('uniqueValues');
  return set.size;
};

module.exports = { uniqueValues };
