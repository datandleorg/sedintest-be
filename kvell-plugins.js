// kvell-plugins.js
module.exports = {
  databasePlugins: [
    {
      resolve: "kvell-db-plugin-sequelize",
      options: {
        database: process.env.DATABASE_NAME,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        options: {
          dialect: "mysql",
          host: "localhost",
          logging: false,
          dialectModulePath: require.resolve("mysql2"),
        },
      },
    },
  ],
};
