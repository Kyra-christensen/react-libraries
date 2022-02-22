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
  const object = arr.match(arr.country);

  return object;
}