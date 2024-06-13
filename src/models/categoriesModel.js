import { GET_DB } from "~/config/database";

const Joi = require("joi");
const {
  OBJECT_ID_RULE,
  OBJECT_ID_RULE_MESSAGE,
} = require("~/validations/validators");

//define collection (Name & schema)
const CATEGORIES_COLLECTION_NAME = "categories";
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

const getOneCateGories = async () => {
  try {
    const pool = GET_DB();
    const [rows] = await pool.query(
      `select * from categories, sub_categories, products ,products_skus, users
where categories.id = sub_categories.parent_id 
and sub_categories.id = products.category_id and products.user_id = users.id
and products_skus.product_id = products.id`
    );
    return rows;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const categoriesModel = {
  getOneCateGories,
};
