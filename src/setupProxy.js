const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware({
            //target: 'http://192.168.1.125:1025',
            target: 'http://localhost:1025',
            changeOrigin: true,
        })
    );
};