import express from "express";
import { connectDB } from "~/config/database";
import env from "~/config/environment";

const startServer = async () => {
  try {
    await connectDB();

    const app = express();

    // Define a route to handle requests to the root URL
    app.get("/", async (req, res) => {
      res.setHeader("Content-Type", "text/html");
      res.end("<h1>dnwajndjwadwa</h1>");
    });

    // Start the server using environment variables for port and host
    const server = app.listen(
      process.env.APP_PORT || 3000,
      process.env.APP_HOST || "localhost",
      () => {
        console.log(
          `Server is running at http://${process.env.APP_HOST ||
            "localhost"}:${process.env.APP_PORT || 3000}/`
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
