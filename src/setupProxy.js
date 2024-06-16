const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://10.22.1.203:20080/',
      changeOrigin: true,
    })
  );
};