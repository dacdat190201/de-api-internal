import express from "express";
import { productController } from "~/controllers/productController";
const Router = express.Router();

Router.route("/").get(productController.getALlCategories);

export const categoriesRoute = Router;
