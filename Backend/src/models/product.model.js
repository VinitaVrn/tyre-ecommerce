import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Product = sequelize.define("Product", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    sku: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    model: {
        type: DataTypes.STRING,
    },
    brand: {
        type: DataTypes.STRING,
    },
    images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
    },
    size: {
        type: DataTypes.STRING
    },
    b2b_price: {
        type: DataTypes.INTEGER,
    },
    stock:{
       type: DataTypes.INTEGER, 
    },
    active:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
},
{
    timestamps:true
})

export default Product;