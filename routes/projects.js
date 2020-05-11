const projectsRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const projectsController = require("../controllers").projects;

projectsRouter.get("/", (request, response) => {
  // get method
  projectsController.getProjects().then((res) => {
    response.json(res);
  });
});

projectsRouter.post("/", (request, response) => {
  // post method
  let data = request.body;
  //console.log(request.body);
  projectsController.updateProjects(data).then((res) => {
    response.json(res);
  });
});

projectsRouter.put("/", (request, response) => {
  // put method
});

projectsRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = projectsRouter;
