import express from "express";
import { productRoute } from "./productRoute";
import { categoriesRoute } from "./categoriesRoute";

const Router = express.Router();
// Define your routes here
// Router.get("/status", (req, res) => {
//   res.status(StatusCodes.OK).json({ message: "APIs V1 are ready" });
// });
// Router.use("/boards", boardRoute);
Router.use("/products-by-categories", productRoute);
Router.use("/categories", categoriesRoute);

export const APIs_V1 = Router;
