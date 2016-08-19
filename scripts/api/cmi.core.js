define(['helper/children', 'helper/errorhandler'], function (children, errHandler) {
  var _student_id = "NStudent001",
      _student_name = "Student, Name M.",
      _lesson_location,
      dataModelError = errHandler.dataModelError;

  return function core() {
    //cmi.core._children
    Object.defineProperty(this, "_children", children);

    //cmi.core.student_id
    Object.defineProperty(this, "student_id", {
      get: function () {
        return _student_id;
      },
      set: function () {
        throw new dataModelError("403");
      },
      configurable: false,
      enumerable: true
    });

    //cmi.core.student_name
    Object.defineProperty(this, "student_name", {
      get: function () {
        return _student_name
      },
      set: function () {
        throw new dataModelError("403");
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.lesson_location
    Object.defineProperty(this, "lesson_location", {
      get: function () {
        setError("0");
        return _lesson_location
      },
      set: function (value) {
        var type = checkType(value, 'CMIString255');
        if (!type) {
          return "false";
        } else {
          _lesson_location = value;
          return "true";
        }
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.credit
    Object.defineProperty(this, "credit", {
      get: function () {
        setError("0");
        return _credit;
      },
      set: function (value) {
        var type = checkType(value, 'CMIString255');
        if (!type) {
          return "false";
        } else {
          _credit = value;
          return "true";
        }
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.lesson_status
    Object.defineProperty(this, "lesson_status", {
      get: function () {
        return _lesson_status
      },
      set: function (value) {
        var type = checkType(value, 'CMIString255');
        if (!type) {
          return "false";
        } else {
          _lesson_status = value;
          return "true";
        }
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.entry
    Object.defineProperty(this, "entry", {
      get: function () {
        setError("0");
        return _entry;
      },
      set: function (value) {
        var type = checkType(value, 'CMIString255');
        if (!type) {
          return;
        } else {
          _entry = value;
        }
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.total_time
    Object.defineProperty(this, "total_time", {
      get: function () {
        setError("0");
        return _total_time;
      },
      set: function (value) {
        var type = checkType(value, 'CMIString255');
        if (!type) {
          return "false";
        } else {
          _total_time = value;
          return "true";
        }
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.lesson_mode
    Object.defineProperty(this, "lesson_mode", {
      get: function () {
        setError("0");
        return _entry;
      },
      set: function (value) {
        var type = checkType(value, 'CMIString255');
        if (!type) {
          return;
        } else {
          _entry = value;
        }
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.exit
    Object.defineProperty(this, "exit", {
      get: function () {
        setError("0");
        return _entry;
      },
      set: function (value) {
        var type = checkType(value, 'CMIString255');
        if (!type) {
          return;
        } else {
          _entry = value;
        }
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.session_time
    Object.defineProperty(this, "session_time", {
      get: function () {
        setError("0");
        return _entry;
      },
      set: function (value) {
        var type = checkType(value, 'CMIString255');
        if (!type) {
          return;
        } else {
          _entry = value;
        }
      },
      enumerable: true,
      configurable: false
    });

    //cmi.core.score
    //this.score = new score();
  }

});