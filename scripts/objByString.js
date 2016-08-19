/**
 * Retrieve nested item from object/array
 * @param {Object|Array} obj
 * @param {String} path dot separated
 * @param {*} def default value ( if result undefined )
 * @returns {*}
 * by TheZver
 * http://stackoverflow.com/a/16190716/4276674
**/
function parseObj(obj, path, def) {

  for (var i = 0, path = path.split('.'), len = path.length; i < len; i++) {
    if (!obj || typeof obj !== 'object') return def;
    obj = obj[path[i]];
  }

  if (obj === 'undefined') return def;
  return obj;
}