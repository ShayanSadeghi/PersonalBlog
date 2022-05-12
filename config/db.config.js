module.exports = {
  HOST: "localhost",
  PORT: "3300",
  USER: "root",
  PASSWORD: "password",
  DB: "adminContents",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
};
