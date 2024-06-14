const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products_skus', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    size_attributes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product_attributes',
        key: 'id'
      }
    },
    color_attributes_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'product_attributes',
        key: 'id'
      }
    },
    sku: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products_skus',
    timestamps: true,
    paranoid: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "product_id",
        using: "BTREE",
        fields: [
          { name: "product_id" },
        ]
      },
      {
        name: "size_attributes_id",
        using: "BTREE",
        fields: [
          { name: "size_attributes_id" },
        ]
      },
      {
        name: "color_attributes_id",
        using: "BTREE",
        fields: [
          { name: "color_attributes_id" },
        ]
      },
    ]
  });
};
