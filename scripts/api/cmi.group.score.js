define(['helper/children'], function (children) {

  return function score() {
    //score._children
    Object.defineProperty(this, "_children", children);
  };
});