//Proxy to prevent CORS error for locally executed Google reCaptcha
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/recaptcha/", {
      target: `https://www.google.com`,
      changeOrigin: true
    }));
}
