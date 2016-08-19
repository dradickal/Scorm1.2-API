requirejs.config({
  baseUrl: 'scripts/api',
  paths: {
    lib: '../lib'
  }
});

requirejs(['SCOComm'], function (SCOAPI) {
  window.API = new SCOAPI();
});