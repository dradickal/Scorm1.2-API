define(function () {
  var _errorMessages = 
    {
      "0": "No error",
      "101": "General Exception",
      "201": "Invalid argument error",
      "202": "Element cannot have children",
      "203": "Element not an array. Cannot have count",
      "301": "Not initialized",
      "401": "Not implemented error",
      "402": "Invalid set value, element is a keyword",
      "403": "Element is read only",
      "404": "Element is write only",
      "405": "Incorrect Data Type"
    }

  return {
    notImplemented: ['comments', 'comments_from_lms', 'objectives', 'student_data', 'student_preference', 'interactions'],
    getMessage: function (errNum) {
      return _errorMessages[errNum];
    },
    success: function () {
      this.name = "Success";
      this.value = "0";
      this.message = "Successful Call to API"
      this.details = ""
    },
    runTimeError: function (msg) {
      this.name = "General Error";
      this.value = "101";
      this.message = msg || "";
      this.details = (new Error()).stack;
    },
    syntaxError: function (errNum, msg) {
      this.name = "Syntax Error";
      this.value = errNum;
      this.message = msg || "";
      this.details = (new Error()).stack;
    },
    lmsError: function () {
      this.name = "LMS Error";
      this.value = "301";
      this.message = "A call was made before the LMS has been initialized. LMSInitialize must be called and return 'true' first.";
      this.details = (new Error()).stack;
    },
    dataModelError: function (errNum, msg) {
      this.name = "Data Model Error";
      this.value = errNum;
      this.message = msg || "";
      this.details = (new Error()).stack;
    }
  }
});