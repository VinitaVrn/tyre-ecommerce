import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const User = sequelize.define("User", {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    hash_password: {
        type: DataTypes.STRING,
        allowNull:false
    },
    company_name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    role: {
        type: DataTypes.ENUM(
            "ADMIN",
            "CUSTOMER",
        ),
        allowNull: false,
        defaultValue:"CUSTOMER"
    },
},
{
    timestamps:true
})

export default User;