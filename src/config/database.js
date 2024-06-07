const mysql = require("mysql2");

export const connectDB = async () => {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST_SERVER,
      port: process.env.DB_PORT,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("Connected successfully to the database!");
    return connection;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};
