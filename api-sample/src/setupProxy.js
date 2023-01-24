const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/df", {
      target: ["https://api.neople.co.kr", "https://img-api.neople.co.kr"],
      changeOrigin: true,
    })
  );
};
