module.exports = {
  protocol: "http",
  routes: [
    {
      name: "projects",
      path: "/projects/:id",
    },
  ],
  models: ["projects"],
  autoRequireRoutes: true,
  registerDocsRoute: true,
};
