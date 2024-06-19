import express from "express";
import { productController } from "~/controllers/productController";
const Router = express.Router();

Router.route("/").get(productController.getALlCategories);
Router.route("/:id").get(productController.getProductByCategories);
export const categoriesRoute = Router;
