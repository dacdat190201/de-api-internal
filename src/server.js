import express from "express";
import { connectDB } from "~/config/database";
import "dotenv/config";
const startServer = async () => {
  try {
    await connectDB();
    console.log("Connect server");

    const app = express();
    app.listen(() => {
      // eslint-disable-next-line no-console
      console.log("Hello Trung Quan Dev, I am running at");
    });
  } catch (err) {
    console.error(err, "show");
    process.exit(1); // Use 1 to indicate an error condition
  }
};

startServer();
