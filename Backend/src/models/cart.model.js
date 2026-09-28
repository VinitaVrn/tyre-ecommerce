import { DataTypes } from "sequelize";
import sequelize from "../db.js";

// const Cart = sequelize.define("Cart", {
//     id: {
//         type: DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     sku: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     },
//     model: {
//         type: DataTypes.STRING,
//     },
//     brand: {
//         type: DataTypes.STRING,
//     },
//     images: {
//         type: DataTypes.STRING,
//     },
//     size: {
//         type: DataTypes.STRING
//     },
//     b2b_price: {
//         type: DataTypes.INTEGER,
//     },
//     stock:{
//        type: DataTypes.INTEGER, 
//     },
//     active:{
//         type:DataTypes.BOOLEAN,
//         defaultValue:true
//     }
// })

// export default User;