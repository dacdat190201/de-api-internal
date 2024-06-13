import Joi from "joi";
import { GET_DB } from "~/config/database";
import { BOARD_TYPES } from "~/utils/constants";
import {
  OBJECT_ID_RULE,
  OBJECT_ID_RULE_MESSAGE,
} from "~/validations/validators";
import { columnModel } from "./columnModel";

//define collection (Name & schema)
const BOARD_COLLECTION_NAME = "boards";
const BOARD_COLLECTION_SCHEMA = Joi.object({
  boardId: Joi.string()
    .required()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  title: Joi.string().required().min(3).max(50).trim().strict(),
  desciption: Joi.string().required().min(3).max(256).trim().strict(),
  //desc co the optinal() sau tring()
  columnOrdersIds: Joi.array().items(Joi.string()).default([]),
  createdAt: Joi.date().timestamp("javascript").default(Date.now),
  updatedAt: Joi.date().timestamp("javascript").default(null),
  _destroy: Joi.boolean().default(false),
  type: Joi.string().valid(BOARD_TYPES.PUBLIC, BOARD_TYPES.PRIVATE).required(), //enum sql
});

const createNew = async (data) => {
  try {
    const createdBoard = await GET_DB()
      .collection(BOARD_COLLECTION_NAME)
      .insertOne(data);
    return createdBoard;
  } catch (error) {
    throw new Error(error);
  }
};
const findOneId = async (id) => {
  try {
    const result = await GET_DB.collection(BOARD_COLLECTION_NAME).findOne({
      _id: id,
    });
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const getDetails = async (id) => {
  try {
    // const result = await GET_DB.collection(BOARD_COLLECTION_NAME).findOne({
    //   _id: id,
    // });
    //query tong hop
    const result = await GET_DB.collection(BOARD_COLLECTION_NAME).aggregate([
      {
        $match: {
          // _id: new ObjectId(id),//cuar mogoDB
          _id: id,
          _destroy: false,
        },
      },
      {
        $lookup: {
          form: columnModel.COLUMN.COLLECTION_NAME,
          localField: "_id",
          foreignField: "boardId",
        },
      },
      {},
    ]);
    return result;
  } catch (error) {
    throw new Error(error);
  }
};
export const boardModel = {
  BOARD_COLLECTION_NAME,
  BOARD_COLLECTION_SCHEMA,
  createNew,
  findOneId,
  getDetails,
};
