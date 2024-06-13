import { StatusCodes } from "http-status-codes";
import ApiError from "~/middlewares/ApiError";
import { productModel } from "~/models/productModel";

const getAllProducts = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const listProducts = await productModel.getAllProducts();
    if (!listProducts) {
      throw new ApiError(StatusCodes.NOT_FOUND, "products not found!");
    }
    return listProducts;
  } catch (error) {
    throw error;
  }
};
export const productService = {
  getAllProducts,
};
