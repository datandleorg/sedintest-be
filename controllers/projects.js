const ProjectModelMethods = require("../models/index").projects;
const projectsController = {};
const co = require("co");

projectsController.getProjects = async () => {
  try {
    let result = await ProjectModelMethods.getProjects();
    return { status: 200, result };
  } catch (err) {
    //errorHandler(err);
  }
};

// projectsController.updateProjects = async (data) => {
//   try {
//     let res = await ProjectModelMethods.updateProjects(data.projects);
//     return res;
//   } catch (err) {
//     //errorhandler();
//   }
// };

function* generatorWithRejectedPromises(projects) {
  let i = 0;
  while (i < projects.length) {
    yield ProjectModelMethods.updateProject(projects[i]);
    i++;
  }
  return true;
}

projectsController.updateProjects = async (data) => {
  try {
    let result = [];
    for await (let num of generatorWithRejectedPromises(data.projects)) {
      result.push(num);
    }
    return { status: 200, result };
  } catch (e) {
    // errorhandler() will return appropriate error
  }
};

module.exports = projectsController;
