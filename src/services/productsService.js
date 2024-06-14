import { StatusCodes } from "http-status-codes";
import ApiError from "~/middlewares/ApiError";
import products from "~/models/products";

const getAllProducts = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const listProducts = await products.findAll();
    if (!listProducts || listProducts.length === 0) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Products not found!");
    }
    return listProducts;
  } catch (error) {
    throw error;
  }
};
export const productService = {
  getAllProducts,
};
