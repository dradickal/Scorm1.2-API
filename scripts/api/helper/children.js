define(function () {

  return {
    get: function () {
      return Object.keys(this).toString();
    },
    set: function () {
      throw new dataModelError("402");
    },
    enumerable: false,
    configurable: false
  };
});