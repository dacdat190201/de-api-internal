import { StatusCodes } from "http-status-codes";
import Message from "~/migrations/message";
import { productService } from "~/services/productsService";

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productService.getAllProducts();
    res.status(StatusCodes.OK).json(products);
  } catch (error) {
    next(error);
  }
};
const getALlCategories = async (req, res, next) => {
  try {
    const categories = await productService.getCategories();
    const message = new Message(
      true,
      "List of categories retrieved successfully",
      categories
    );
    if (!categories) {
      const err = new Message(false, "err", categories);
      res.status(StatusCodes.FAILED_DEPENDENCY).json(err);
    }
    res.status(StatusCodes.OK).json(message);
  } catch (error) {
    next(error);
  }
};
export const productController = {
  getAllProducts,
  getALlCategories,
};
