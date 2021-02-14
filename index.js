function mergeString(...classes) {
  let str = '';

  if (classes && classes.length > 0) {
    for (let index = 0; index < classes.length; index++) {
      const item = classes[index];
      if (typeof item === 'string') {
        str = str + ' ' + item;
      } else if (typeof item === 'object') {
        for (const key in item) {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            const value = item[key];
            if (value === true) {
              str = str + ' ' + key;
            }
          }
        }
      }
    }
  }

  return str;
}

module.exports = mergeString;

export { mergeString };

export default mergeString;
