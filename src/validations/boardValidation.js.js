import { StatusCodes } from "http-status-codes";
import Joi from "joi";
import ApiError from "~/middlewares/ApiError";
import { BOARD_TYPES } from "~/utils/constants";

const createNew = async (req, res, next) => {
  //kiem tra dieu kien
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    desciption: Joi.string().required().min(3).max(256).trim().strict(),
    type: Joi.string()
      .valid(BOARD_TYPES.PUBLIC, BOARD_TYPES.PRIVATE)
      .required(), //enum sql
  });
  try {
    // abortEarly, neu co nhieu loi thi tra all err
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    next();
    //next được chạy qua bỏadRoute, từ phần res..... chạy lần lượt
  } catch (error) {
    next(
      new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message)
    );
  }
};
export const boardValidation = {
  createNew,
};
