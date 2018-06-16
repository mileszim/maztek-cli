module.exports = {
  'connect-src': [
    "'self'",
    "wss://*.firebaseio.com",
    "https://*.googleapis.com",
  ],
  'font-src': [
    "'self'",
    "https://*.googleapis.com",
    "https://*.gstatic.com",
  ],
  'frame-src': [
    "'self'",
    "https://*.firebaseapp.com",
  ],
  'script-src': [
    "'self'",
    "'unsafe-eval'",
    "apis.google.com",
    "https://www.google-analytics.com",
  ],
  'style-src': [
    "'self'",
    "https://*.googleapis.com",
    "https://*.gstatic.com",
  ],
};
