import { Sequelize } from "sequelize";
import dbConfig from "../config/db.config";

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  port: dbConfig.PORT,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Messages = require("./message.model")(sequelize, Sequelize);
db.Personal = require("./personal.model")(sequelize, Sequelize);
db.Skills = require("./skill.model")(sequelize, Sequelize);
db.Projects = require("./project.model")(sequelize, Sequelize);

module.exports = db;
