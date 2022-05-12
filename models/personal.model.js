import { DataTypes } from "sequelize";

module.exports = (sequelize, Sequelize) => {
  const Personal = sequelize.define(
    "Personal",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      position: {
        type: DataTypes.INTEGER,
      },
      year: {
        type: DataTypes.STRING,
      },

      header: {
        type: DataTypes.STRING,
      },
      body: {
        type: DataTypes.TEXT,
      },
    },
    { timestamps: false }
  );
  return Personal;
};
