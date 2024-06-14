// import { StatusCodes } from "http-status-codes";
// import ApiError from "~/middlewares/ApiError";
// import { boardModel } from "~/models/boardModel";

// const createNew = async (reqBody) => {
//   // eslint-disable-next-line no-useless-catch
//   try {
//     // xu li logic data
//     const newBoard = {
//       ...reqBody,
//       title: reqBody.title,
//     };
//     // goi toi modal de xu li ban ghi newBoard vao trong database
//     const createdBoard = await boardModel.createNew(newBoard);
//     const getNewBoard = await boardModel.findOneId(createdBoard.insertedId);
//     //service phai co return
//     return getNewBoard;
//   } catch (error) {
//     throw error;
//   }
// };
// const getDetails = async (boardId) => {
//   // eslint-disable-next-line no-useless-catch
//   try {
//     const board = await boardModel.getDetails(boardId);
//     if (!board) {
//       throw new ApiError(StatusCodes.NOT_FOUND, "board not found!");
//     }
//     //service phai co return
//     return board;
//   } catch (error) {
//     throw error;
//   }
// };
// export const boardService = {
//   createNew,
//   getDetails,
// };
