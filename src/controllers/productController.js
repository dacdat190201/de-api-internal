import { StatusCodes } from "http-status-codes";
import { productService } from "~/services/productsService";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};
export const productController = {
  getAllProducts,
};
