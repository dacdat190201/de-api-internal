import express from "express";
import { connectDB, GET_DB } from "~/config/database";
import { env } from "~/config/environment";
import { APIs_V1 } from "~/routes/v1/";

const START_SERVER = () => {
  const app = express();
  //parse ra json
  app.use(express.json());

  //use api v1
  app.use("/v1", APIs_V1);

  //Middleửae xử lí lỗi tậpt trung
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
  });

  app.listen(env.APP_PORT || 3000, env.APP_HOST || "localhost", () => {
    console.log(
      `Server is running at http://${
        env.APP_HOST || "localhost"
      }:${env.APP_PORT || 3000}/`
    );
  });
};
(async () => {
  try {
    console.log("1. connecting");
    await connectDB();
    console.log("2. connected!!!!!!!!!");
    START_SERVER();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
})();
