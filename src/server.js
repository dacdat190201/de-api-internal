import express from "express";
import { connectDB } from "~/config/database";
import env from "~/config/environment";
import { APIs_V1 } from "~/routes/v1";
const startServer = async () => {
  try {
    await connectDB();
    const app = express();

    // Start the server using environment variables for port and host
    const server = app.listen(
      process.env.APP_PORT || 3000,
      process.env.APP_HOST || "localhost",
      () => {
        console.log(
          `Server is running at http://${
            process.env.APP_HOST || "localhost"
          }:${process.env.APP_PORT || 3000}/`
        );
      }
    );

    // Return the server instance to be used for closing later if needed
    return server;
  } catch (err) {
    console.error("Error starting the server:", err);
    process.exit(1);
  }
};

startServer();
