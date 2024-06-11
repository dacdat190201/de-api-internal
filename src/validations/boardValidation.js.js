import { StatusCodes } from "http-status-codes";
import Joi from "joi";

const createNew = async (req, res, next) => {
  //kiem tra dieu kien
  const correctCondition = Joi.object({
    title: Joi.string().required().min(3).max(50).trim().strict(),
    desciption: Joi.string().required().min(3).max(256).trim().strict(),
  });
  try {
    // abortEarly, neu co nhieu loi thi tra all err
    await correctCondition.validateAsync(req.body, { abortEarly: false });
    next();
    //next được chạy qua bỏadRoute, từ phần res..... chạy lần lượt
  } catch (error) {
    // tra status 422, xem trong properties
    next(error);
  }
};
export const boardValidation = {
  createNew,
};
