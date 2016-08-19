define(['cmi', 'helper/errorhandler'], function (datamodel, errHandler) {

  //cmi not using 'private' underscore to match elem string that gets sent
  var cmi = new datamodel(),
      _success = errHandler.success,
      _lastError = new _success(),
      _LMSInitialized = "false";

  function isInitialized() {
    if (_LMSInitialized === "true") {
      return;
    } else {
      throw new errHandler.lmsError();
    }
  }

  function checkDataModel(path) {
    if (path.substring(0, (path.indexOf('.'))) !== "cmi") {
      throw new errHandler.dataModelError("401", path + " is not a valid SCORM Run-Time Environment Data Model");
    }
    
    var notImp = errHandler.notImplemented;
    for (group in notImp) {
      if (path.indexOf(notImp[group]) !== -1) {
        throw new errHandler.dataModelError("401");
      }
    }
  }

  function parseHandler(pathElem) {
    if (pathElem === "_children") {
      throw new errHandler.syntaxError("202");
    }
    else if (pathElem === "_count") {
      throw new errHandler.syntaxError("203");
    }
    else {
      throw new errHandler.syntaxError("201");
    }
  }

  function parseObj(obj, path) {
    var pathArr = path.split('.'),
        len = pathArr.length;

    //index starts at 1 because obj = pathArr[0] = cmi
    for (var i = 1; i < len; i++) {
      if (!obj || typeof obj !== 'object') {
        parseHandler(pathArr[i]);
      }
      obj = obj[pathArr[i]];
    }

    if (obj === 'undefined') {
      throw new errHandler.syntaxError("201");
    }
    return obj;
  }


  //Exporting the API functions needed to Communicate
  return function SCOAPI() {
    this.LMSInitialize = function (settings) {
      try {
        if (!settings === "" || !settings === undefined) {
          throw new errHandler.syntaxError("201", "LMSInitialize expects an empty string");
        }

        _LMSInitialized = "true";
        _lastError = new _success();
        return _LMSInitialized;
      }
      catch (e) {
        _lastError = e;
        _LMSInitialized = "false";
        return _LMSInitialized;
      }
    };

    this.LMSFinish = function (settings) {
      try {
        isInitialized();
      }
      catch (e) {
      
      }
    };

    this.LMSGetValue = function (elem) {
      try {
        isInitialized();
        checkDataModel(elem);
        var value = parseObj(cmi, elem);
        
        _lastError = new _success();
        return value;
      }
      catch (e) {
        _lastError = e;
        return "";
      }
    };

    this.LMSSetValue = function (elem, value) {
      try {
        isInitialized();
      }
      catch (e) {
      
      }
    };

    this.LMSCommit = function (settings) {
      try {
        isInitialized();
      }
      catch (e) {
      
      }
    };

    this.LMSGetLastError = function () {
      return _lastError.value;
    };

    this.LMSGetErrorString = function (errNum) {
      return errHandler.getMessage(errNum);
    };

    this.LMSGetDiagnostic = function (errNum) {
      //An empty string requests info on the last Error
      if (errNum === "" || errNum === undefined) {
        return _lastError.message;
      } else {
        //An ErrorNumber requests any vendor-desired additional information (Non added)
        return "";
      }
    };
  };
});