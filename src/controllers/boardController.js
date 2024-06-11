import { StatusCodes } from "http-status-codes";
const createNew = async (req, res, next) => {
  //kiem tra dieu kien
  try {
    console.log(req.body);
    res
      .status(StatusCodes.CREATED)
      .json({ message: "POS Validation: API create list" });
  } catch (error) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ error: error.message });
  }
};
export const boardController = {
  createNew,
};