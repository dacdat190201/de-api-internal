import express from "express";
import { StatusCodes } from "http-status-codes";
import { productController } from "~/controllers/productController";
const Router = express.Router();

Router.route("/")
  .get((req, res) => {
    res.status(StatusCodes.OK).json({ message: "Note: API get list" });
  })
  .post(productController.getAllProducts);

export const productRoute = Router;
