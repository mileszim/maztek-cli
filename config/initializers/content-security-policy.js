module.exports = function() {
  return {
    'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com",
    'frame-src': "'self' https://*.firebaseapp.com",
    'script-src': "'self' 'unsafe-eval' apis.google.com",
    'style-src': "'self'"
  };
};
