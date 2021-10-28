const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://hamchu.shop:8090',
      changeOrigin: true,
    }),
  );
};
