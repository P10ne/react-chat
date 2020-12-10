const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/sockets',
    createProxyMiddleware({
      target: 'http://localhost:4000/',
      changeOrigin: true,
      pathRewrite: {'/api/sockets': ''}
    })
  );
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:4000/',
      changeOrigin: true
    })
  );
};
