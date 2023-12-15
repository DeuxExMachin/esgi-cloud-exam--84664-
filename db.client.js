const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'postgres://pingouin_user:otEkdDcH7Dssh6mo22OY5r9kp2xQ3ZJ3@dpg-clu297a1hbls73e8kav0-a.frankfurt-postgres.render.com/pingouin', // TODO
  {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
);

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    sequelize.sync().catch(() => console.log("Cannot sync the database"));
  })
  .catch(() => console.log("Cannot connect to database, please check environment credentials"));

module.exports = sequelize;