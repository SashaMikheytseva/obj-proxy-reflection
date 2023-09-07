export default function orderByProps(obj, arrSort) {
  const arrWithOrder = [];
  const arrWithoutOrder = [];

  for (const prop in obj) {
    if (arrSort.includes(prop)) {
      arrWithOrder.push({ key: prop, value: obj[prop] });
    } else {
      arrWithoutOrder.push({ key: prop, value: obj[prop] });
    }
  }

  arrWithOrder.sort((a, b) => arrSort.indexOf(a.key) - arrSort.indexOf(b.key));
  arrWithoutOrder.sort((a, b) => a.key.localeCompare(b.key));

  return arrWithOrder.concat(arrWithoutOrder);
}
