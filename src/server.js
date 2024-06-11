import express from "express";
import { connectDB, GET_DB } from "~/config/database";
import env from "~/config/environment";
import { APIs_V1 } from "~/routes/v1/";

const START_SERVER = () => {
  const app = express();
  app.use("/v1", APIs_V1);
  connectDB();
  app.listen(
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
};
(async () => {
  try {
    console.log("1. connecting");
    await connectDB();
    console.log("1. connected!!!!!!!!!");
    START_SERVER();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
})();
