import { GET_DB } from "~/config/database";

const Joi = require("joi");
const {
  OBJECT_ID_RULE,
  OBJECT_ID_RULE_MESSAGE,
} = require("~/validations/validators");

//define collection (Name & schema)
const PRODUCTS_COLLECTION_NAME = "products";
const PRODUCTS_COLLECTION_SCHEMA = Joi.object({
  id: Joi.string()
    .required()
    .pattern(OBJECT_ID_RULE)
    .message(OBJECT_ID_RULE_MESSAGE),
  name: Joi.string().required().min(3).max(256).trim().strict(),
  desciption: Joi.string().optional(),
  //desc co the optinal() sau tring()
  summary: Joi.string().required().min(3).max(100).trim().strict(),
  cover: Joi.string().optional(),
  created_at: Joi.date().timestamp("javascript").default(Date.now),
  deleted_at: Joi.date().timestamp("javascript").default(null),
});

const getAllProducts = async () => {
  try {
    const pool = GET_DB();
    const [rows] = await pool.query(`SELECT * FROM ${PRODUCTS_COLLECTION_NAME}`);
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const productModel = {
  getAllProducts,
};
