import express from "express";
import { StatusCodes } from "http-status-codes";
import { boardRoute } from "./boardRoute";

const Router = express.Router();

// Define your routes here
Router.get("/status", (req, res) => {
  res.status(StatusCodes.OK).json({ message: "APIs V1 are ready" });
});
Router.use("/boards", boardRoute);
export const APIs_V1 = Router;
