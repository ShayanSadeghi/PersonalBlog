import { DataTypes } from "sequelize";

module.exports = (sequelize, Sequelize) => {
  const Message = sequelize.define(
    "Message",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
      },

      email: {
        type: DataTypes.STRING,
      },
      title: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      message: {
        type: DataTypes.TEXT,
      },
    },
    { updatedAt: false }
  );
  return Message;
};
