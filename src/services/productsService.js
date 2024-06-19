import { StatusCodes } from "http-status-codes";
import { GET_DB } from "~/config/database";
import ApiError from "~/middlewares/ApiError";
import { initModels } from "~/models/init-models";

const getAllProducts = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const sequelize = GET_DB();
    const models = initModels(sequelize);
    const listProducts = await models.products.findAll({
      attributes: [
        "id",
        "name",
        "description",
        "cover",
        "summary",
        "price",
        "created_at",
      ],
    });
    if (!listProducts || listProducts.length === 0) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Products not found!");
    }
    return listProducts;
  } catch (error) {
    throw error;
  }
};
const getCategories = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const sequelize = GET_DB();
    const models = initModels(sequelize);
    const listCategories = await models.categories.findAll();
    if (!listCategories || listCategories.length === 0) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Categories not found!");
    }
    return listCategories;
  } catch (error) {
    throw error;
  }
};
export const productService = {
  getAllProducts,
  getCategories,
};
