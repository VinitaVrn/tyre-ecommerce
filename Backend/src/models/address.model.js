import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Address = sequelize.define("Address", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references:{
            model:"Users",
            key:"id"
        }
    },
    city: {
        type: DataTypes.STRING,
      
    },
    pincode: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    address_line_1: {
        type: DataTypes.STRING,
        allowNull: true,
    },
     address_line_2: {
        type: DataTypes.STRING,
    },

},
{
    timestamps:true
})

export default Address