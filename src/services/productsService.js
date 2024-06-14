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
      include: [
        {
          model: models.users,
          attributes: ["id", "username", "avatar"], //lấy ra info user
        },
        {
          model: models.sub_categories,
          attributes: ["id", "name", "description"],
          include: [
            { model: models.categories, attributes: ["parent_id", "name"] },
          ],
        },
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
export const productService = {
  getAllProducts,
};
