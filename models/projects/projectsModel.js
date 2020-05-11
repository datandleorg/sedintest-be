const sequelize = require("kvell-db-plugin-sequelize").dbInstance;
const Sequelize = require("kvell-db-plugin-sequelize").dbLib;

// Create your User model's schema here and export it.

const Project = sequelize.define(
  "projects",
  {
    project_id: {
      primaryKey: true,
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    name: {
      unique: true,
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    hrs: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = Project;
