import { DataTypes } from "sequelize";

module.exports = (sequelize, Sequelize) => {
  const Skill = sequelize.define("Skill", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    position: {
      type: DataTypes.INTEGER,
    },
    title: {
      type: DataTypes.STRING,
    },
    subSkills: {
      type: DataTypes.TEXT,
    },
  });
  return Skill;
};
