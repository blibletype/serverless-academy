const existInFiles = (data) => {
  const map = new Map();

  for (const array of data) {
    const uniqueValues = new Set(array);
    for (const item of uniqueValues) {
      let counter = map.get(item) ?? 0;
      map.set(item, ++counter);
    }
  }

  return map;
};

module.exports = { existInFiles };
