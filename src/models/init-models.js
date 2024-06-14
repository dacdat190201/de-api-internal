var DataTypes = require("sequelize").DataTypes;
var _addresses = require("./addresses");
var _cart = require("./cart");
var _cart_item = require("./cart_item");
var _categories = require("./categories");
var _order_details = require("./order_details");
var _order_item = require("./order_item");
var _payment_details = require("./payment_details");
var _product_attributes = require("./product_attributes");
var _products = require("./products");
var _products_skus = require("./products_skus");
var _roles = require("./roles");
var _sub_categories = require("./sub_categories");
var _users = require("./users");
var _wishlist = require("./wishlist");

function initModels(sequelize) {
  var addresses = _addresses(sequelize, DataTypes);
  var cart = _cart(sequelize, DataTypes);
  var cart_item = _cart_item(sequelize, DataTypes);
  var categories = _categories(sequelize, DataTypes);
  var order_details = _order_details(sequelize, DataTypes);
  var order_item = _order_item(sequelize, DataTypes);
  var payment_details = _payment_details(sequelize, DataTypes);
  var product_attributes = _product_attributes(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var products_skus = _products_skus(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var sub_categories = _sub_categories(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);
  var wishlist = _wishlist(sequelize, DataTypes);

  cart_item.belongsTo(cart, { as: "cart", foreignKey: "cart_id"});
  cart.hasMany(cart_item, { as: "cart_items", foreignKey: "cart_id"});
  sub_categories.belongsTo(categories, { as: "parent", foreignKey: "parent_id"});
  categories.hasMany(sub_categories, { as: "sub_categories", foreignKey: "parent_id"});
  order_item.belongsTo(order_details, { as: "order", foreignKey: "order_id"});
  order_details.hasMany(order_item, { as: "order_items", foreignKey: "order_id"});
  payment_details.belongsTo(order_details, { as: "order", foreignKey: "order_id"});
  order_details.hasMany(payment_details, { as: "payment_details", foreignKey: "order_id"});
  products_skus.belongsTo(product_attributes, { as: "size_attribute", foreignKey: "size_attributes_id"});
  product_attributes.hasMany(products_skus, { as: "products_skus", foreignKey: "size_attributes_id"});
  products_skus.belongsTo(product_attributes, { as: "color_attribute", foreignKey: "color_attributes_id"});
  product_attributes.hasMany(products_skus, { as: "color_attributes_products_skus", foreignKey: "color_attributes_id"});
  cart_item.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(cart_item, { as: "cart_items", foreignKey: "product_id"});
  order_item.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_item, { as: "order_items", foreignKey: "product_id"});
  products_skus.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(products_skus, { as: "products_skus", foreignKey: "product_id"});
  wishlist.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(wishlist, { as: "wishlists", foreignKey: "product_id"});
  cart_item.belongsTo(products_skus, { as: "products_sku", foreignKey: "products_sku_id"});
  products_skus.hasMany(cart_item, { as: "cart_items", foreignKey: "products_sku_id"});
  order_item.belongsTo(products_skus, { as: "products_sku", foreignKey: "products_sku_id"});
  products_skus.hasMany(order_item, { as: "order_items", foreignKey: "products_sku_id"});
  users.belongsTo(roles, { as: "role", foreignKey: "role_id"});
  roles.hasMany(users, { as: "users", foreignKey: "role_id"});
  products.belongsTo(sub_categories, { as: "category", foreignKey: "category_id"});
  sub_categories.hasMany(products, { as: "products", foreignKey: "category_id"});
  addresses.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(addresses, { as: "addresses", foreignKey: "user_id"});
  cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(cart, { as: "carts", foreignKey: "user_id"});
  order_details.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order_details, { as: "order_details", foreignKey: "user_id"});
  products.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(products, { as: "products", foreignKey: "user_id"});
  wishlist.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(wishlist, { as: "wishlists", foreignKey: "user_id"});

  return {
    addresses,
    cart,
    cart_item,
    categories,
    order_details,
    order_item,
    payment_details,
    product_attributes,
    products,
    products_skus,
    roles,
    sub_categories,
    users,
    wishlist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
