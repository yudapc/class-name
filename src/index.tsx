export const ClassName = (hashValue: object = {}) => {
  const filterValue = Object.keys(hashValue).map((key) => truthyValue(key, hashValue));
  const finalValue = filterValue.filter(x => x !== '');
  return finalValue.join(' ');
}

const truthyValue = (key: string = '', hashValue: object = {}) => {
  return hashValue[key] ? camelCaseToDash(key) : '';
}

const camelCaseToDash = (str: string = '') => {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

export default ClassName;
