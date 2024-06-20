import express from "express";
import { connectDB, GET_DB } from "~/config/database";
import { env } from "~/config/environment";
import { APIs_V1 } from "~/routes/v1/";
import { errorHandlingMiddleware } from "./middlewares/errorHandlingMiddleware";
import cors from "cors";

const START_SERVER = () => {
  const app = express();
  //parse ra json
  // app.use(cors({
  //   origin: 'http://example.com', // Chỉ cho phép origin http://example.com
  //   allowedHeaders: ['Content-Type', 'Authorization'], // Chỉ cho phép các headers nhất định
  //   exposedHeaders: ['Content-Length'], // Các headers sẽ được phép truy cập từ client
  //   credentials: true, // Cho phép sử dụng cookies, xác thực HTTP
  //   maxAge: 86400, // Thời gian lưu trữ preflight request (24 giờ)
  // }));

  app.use(express.static("src"));
  app.use("src/images", express.static("images"));

  app.use(
    cors({
      origin: "*",
    })
  );
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
