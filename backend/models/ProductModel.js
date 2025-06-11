import { DataTypes } from "sequelize";
import db from "../config/database.js";

const Product = db.define('Product', {
  title: {                
    type: DataTypes.STRING,
    allowNull: true    
  },
  price: {
    type: DataTypes.DOUBLE, 
    allowNull: true
  }
}, {
  freezeTableName: true,
  tableName: 'products' 
});

export default Product;