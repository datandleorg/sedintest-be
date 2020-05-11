/**
 * `globalMiddlewares` handles all the middlewares/functions/configurations that you need
 * to declare/use in your application globally.
 * @param {import ("kvell-scripts").KvellAppObject} app
 * @param {import ("kvell-scripts").KvellServerObject} server
 */
const routes = require("../routes");
const bodyParser = require("body-parser");

const globalMiddlewares = (app, server) => {
  app.use(bodyParser.json({ limit: "5mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/projects", routes.projects);
};

module.exports = globalMiddlewares;
