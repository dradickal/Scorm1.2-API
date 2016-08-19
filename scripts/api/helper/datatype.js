define(function () {
  var types = 
    {
      "CMIBlank": "",
      "CMIBoolean": "",
      "CMIDecimal": "",
      "CMIFeedback": "",
      "CMIIdentifier": "",
      "CMIInteger": "",
      "CMISInteger": "",
      "CMIString255": "",
      "CMIString4096": "",
      "CMITime": "",
      "CMITimespan": "",
      "CMIVocabulary": {
        "Mode": ["normal", "review", "browse"],
        "Status": ["passed", "completed", "failed", "incomplete", "browsed", "not attempted"],
        "Exit": ["time-out", "suspend", "logout", ""],
        "Credit": ["credit", "no-credit"],
        "Entry": ["ab-initio", "resume", ""],
        "Interaction": ["true-false", "choice", "fill-in", "matching", "performance", "likert", "sequencing", "numeric"],
        "Result": ["corrct", "wrong", "unanticipated", "neutral", "CMIDecimal"],
        "TimeLimitAction": ["exit,message", "exit,no message", "continue,message", "continue,no message"]
      }
    }

  return function checkType(value) {

  }
});