import { StatusCodes } from "http-status-codes";
import { boardService } from "~/services/boardService";

const createNew = async (req, res, next) => {
  try {
    // Dieu huong DL sang tang service
    const createBoard = await boardService.createNew(req.body);
    //results tra ve phia Clients
    res.status(StatusCodes.CREATED).json(createBoard);
  } catch (error) {
    next(error);
  }
};
const getDetails = async (req, res, next) => {
  try {
    const boardId = req.params.id;
    const board = await boardService.getDetails(boardId);
    res.status(StatusCodes.OK).json(board);
  } catch (error) {
    next(error);
  }
};
export const boardController = {
  createNew,
  getDetails,
};
