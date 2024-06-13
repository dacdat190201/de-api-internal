import express from "express";
import { connectDB, GET_DB } from "~/config/database";
import { env } from "~/config/environment";
import { APIs_V1 } from "~/routes/v1/";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware";

const START_SERVER = () => {
  const app = express();
  //parse ra json
  app.use(express.json());

  //use api v1
  app.use("/v1", APIs_V1);

  //Middleửae xử lí lỗi tậpt trung
  app.use(errorHandlingMiddleware);

  app.listen(env.APP_PORT || 3000, env.APP_HOST || "localhost", () => {
    console.log(
      `Server is running at http://${
        env.APP_HOST || "localhost"
      }:${env.APP_PORT || 3000}/`
    );
  });
  // // Example database query
  // GET_DB().execute('SELECT * FROM products')
  //   .then(([rows]) => {
  //     console.log(rows);
  //   })
  //   .catch(err => {
  //     console.error('Error executing query:', err.stack);
  //   });
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
