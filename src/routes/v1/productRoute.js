import express from "express";
import { productController } from "~/controllers/productController";
const Router = express.Router();

Router.route("/").get(productController.getAllProducts);

export const productRoute = Router;
