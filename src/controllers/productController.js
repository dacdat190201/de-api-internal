import { StatusCodes } from "http-status-codes";
import { productService } from "~/services/productsService";

const getAllProducts = async (req, res, next) => {
  try {
    res.status(StatusCodes.OK).json(productService.getAllProducts);
  } catch (error) {
    next(error);
  }
};
export const productController = {
  getAllProducts,
};
