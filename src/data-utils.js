export function generateColumns(dataArr) {
  const keys = Object.keys(dataArr[0]);

  const columns = keys.map(key => {
    return {
      key: key,
      name: key
        .map(word => word[0].toUperCase() + word.slice(1))
    };
  });
  return columns;
}