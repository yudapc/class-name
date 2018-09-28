function className(hashValue) {
  const filterValue = Object.keys(hashValue).map((key) => truthyValue(key, hashValue));
  const finalValue = filterValue.filter(x => x !== '');
  return finalValue.join(' ');
}

function truthyValue(key, hashValue) {
  return hashValue[key] ? camelCaseToDash(key) : '';
}

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

module.exports = className;
