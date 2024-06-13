import express from "express";
import { boardRoute } from "./boardRoute";
import { productRoute } from "./productRoute";

const Router = express.Router();
// Define your routes here
// Router.get("/status", (req, res) => {
//   res.status(StatusCodes.OK).json({ message: "APIs V1 are ready" });
// });
Router.use("/boards", boardRoute);
Router.use("/products", productRoute);

export const APIs_V1 = Router;
