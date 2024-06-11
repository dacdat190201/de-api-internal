const mysql = require("mysql2");

let trelloDatabaseintstance = null;
export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST_SERVER,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    trelloDatabaseintstance = connection;
    return trelloDatabaseintstance;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export const GET_DB = () => {
  if (!trelloDatabaseintstance)
    throw new Error("Must connect to database first");
  return trelloDatabaseintstance;
};
