define(['cmi.core'], function (core) {

  return function cmi() {

    //cmi._version
    Object.defineProperty(this, "_version", {
      get: function () {
        return "3.4";
      },
      set: function () {
      },
      configurable: false,
      enumerable: false
    });

    //cmi.core
    this.core = new core();

    //cmi.suspend_data

    //cmi.launch_data

    //NOT CURRENTLY IMPLEMENTED - Adjust errorhandler if added
    //cmi.comments
    //cmi.comments_from_lms
    //cmi.objectives
    //cmi.student_data
    //cmi.student_preference
    //cmi.interactions
  };

});