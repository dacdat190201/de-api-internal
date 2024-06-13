const mysql = require("mysql2/promise");

let trelloDatabaseInstance = null;

export const connectDB = async () => {
  try {
    if (!trelloDatabaseInstance) {
      const pool = await mysql.createPool({
        host: process.env.DB_HOST_SERVER,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      });
      trelloDatabaseInstance = pool;
    }
    return trelloDatabaseInstance;
  } catch (error) {
    console.error("Error connecting to the database:", error);
    throw error;
  }
};

export const GET_DB = () => {
  if (!trelloDatabaseInstance) {
    throw new Error("Must connect to database first");
  }
  return trelloDatabaseInstance;
};
