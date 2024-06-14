import { StatusCodes } from "http-status-codes";
import { productService } from "~/services/productsService";

const getAllProducts = async (req, res, next) => {
  try {
    const products = "select * from products";
    // productService.getAllProducts();

    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};
export const productController = {
  getAllProducts,
};
