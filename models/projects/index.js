// eslint-disable-next-line no-unused-vars
const Project = require("./projectsModel");

const ProjectModelMethods = {};

ProjectModelMethods.getProjects = () => {
  return Project.findAll();
};

ProjectModelMethods.updateProjects = (projects) => {
  return Project.bulkCreate(projects, {
    fields: ["project_id", "name", "description", "hrs"],
    updateOnDuplicate: ["name"],
  });
};

ProjectModelMethods.updateProject = (project) => {
  return Project.update(project, { where: { project_id: project.project_id } });
};

module.exports = ProjectModelMethods;
