
import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv()

export const registorUserService = async (data) => {

     const user = await User.findOne({
          where: {
               email: data.email
          }
     })
     if (user) {
          throw new Error("User mail already exist")
     }
     const { password, ...userData } = data;
     const hash_password = await bcrypt.hash(password, 10)
     const result = await User.create({ ...userData, hash_password: hash_password });
     return result;
}

export const loginUserService = async (data) => {
     const user = await User.findOne({
          where: {
               email: data.email
          }
     })
     if (!user) {
          throw new Error("Invalid Credentials")
     }
     const verifyPassword = bcrypt.compare(data.password, user.hash_password)
     if (!verifyPassword) {
          throw new Error("Invalid Credentials")
     }
     const token = jwt.sign({
          userId: user.id,
          role: user.role
     },
     process.env.JWT_SECRET_KEY,
     {expiresIn:"1h"}
     )
     return  token;
}