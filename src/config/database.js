const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelizeInstance = null;

export const connectDB = async () => {
  try {
    if (!sequelizeInstance) {
      sequelizeInstance = new Sequelize({
        host: process.env.DB_HOST_SERVER,
        port: process.env.DB_PORT,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        dialect: "mysql",
        logging: false, // Disable logging; default: console.log
        pool: {
          max: 10,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      });
      await sequelizeInstance.authenticate();
      console.log("Connection has been established successfully.");

      // Sync all defined models to the DB.
      await sequelizeInstance.sync();
    }

    return sequelizeInstance;
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
};

export const GET_DB = () => {
  if (!sequelizeInstance) {
    throw new Error("Must connect to database first");
  }
  return sequelizeInstance;
};
