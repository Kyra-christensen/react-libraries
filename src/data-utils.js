export function generateColumns(arr) {
  const keys = Object.keys(arr[0]);

  const columns = keys.map(key => {
    return {
      key: key,
      name: key.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    };
  });
  return columns;
}

export function howManyByCountry(arr) {
  const countTotalCountries = arr.reduce((acc, cur) => {
    if (acc[cur.country]) {
      acc[cur.country].total = acc[cur.country].total + 1;
    } else {
      acc[cur.country] = {};
      acc[cur.country].total = 1;
    }
    return acc;
  }, {});

  return Object.entries(countTotalCountries)
    .map((country, i) => ({
      country: country[0],
      key: i,
      totalCount: country[1].total,
    }));
}