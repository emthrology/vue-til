const modelableTagRE = /^input|textarea?$/;

const assignByPath = function assignByPath(obj, key, value) {
  let keys = key.split('.');
  let last = keys.pop();
  keys.forEach(key => {
    if (!obj[key]) obj[key] = {};
    obj = obj[key];
  });

  obj[last] = value;
};

const getByPath = function getByPath(obj, key) {
  let keys = key.split('.');
  let last = keys.pop();
  keys.forEach(key => {
    if (!obj[key]) obj[key] = {};
    obj = obj[key];
  });

  return obj[last];
};

export default { modelableTagRE, assignByPath, getByPath };
