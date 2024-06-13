import { StatusCodes } from "http-status-codes";
import ApiError from "~/middlewares/ApiError";

const getAllProducts = async (req, res, next) => {
  //kiem tra dieu kien
  try {
    console.log(req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ message: "POS Validation: API create list" });

    //ApiError có hoặc không, nếu k có thì nó vẫn báo error nhưng không show gì bên trong
    throw new ApiError(StatusCodes.BAD_GATEWAY, "Application have been failed");
  } catch (error) {
    next(error);
  }
};
export const productController = {
  getAllProducts,
};
