
  function findAPI(win) {
    while ((win.API == null) && (win.parent != null) && (win.parent != win))  {
      findAPITries++;      
      
      // Note: 10 is an arbitrary number, but should be more than sufficient
      if (findAPITries > 10) {
        alert("Error finding API -- too deeply nested.");
        return null;
      }
      
      win = win.parent;
      
      var numOfFrames = win.frames.length;
      var counter     = 0;
      
      while(counter < numOfFrames){
        if(win.frames[counter].API){
          return win.frames[counter].API;
        }
        counter++;
      }      
    }  
    return win.API;
  }
