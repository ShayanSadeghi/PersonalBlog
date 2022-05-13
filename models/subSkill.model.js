import { DataTypes } from "sequelize";

module.exports = (sequelize, Sequelize) => {
  const SubSkill = sequelize.define(
    "SubSkill",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      skillId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Skills",
          key: "id",
        },
      },
      title: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
  return SubSkill;
};
